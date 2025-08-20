const express = require('express');
const urlRoute = require('./Routes/url');
const staticRoute = require('./Routes/staticRoute');
const userRoute = require('./Routes/user');
const { connectMongo } = require('./conection');
const { restricToLoginUserOnly } = require('./Middlewares/auth');
const URL = require('./Models/url');
const cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config();


const app = express();
const PORT = 8001;

app.set("view engine", "ejs");
app.set("Views", path.resolve("./Views"));



//connection with mongoDB
connectMongo(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB is connected");
})

// to parse the body
app.use(express.json()); // supports json data
app.use(express.urlencoded({extended: false})); // supports form data
app.use(cookieParser()); // this is for using cookies for session id

//routess--
app.use("/url", restricToLoginUserOnly, urlRoute);
// app.get('/:shortId', urlRoute);
app.use('/user', userRoute); 
app.use('/', staticRoute);

app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`);
})