const express = require('express');
const urlRoute = require('./Routes/url');
const staticRoute = require('./Routes/staticRoute');
const { connectMongo } = require('./conection');
const URL = require('./Models/url');
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

//routess--
app.use("/url", urlRoute);
// app.get('/:shortId', urlRoute);
app.use('/', staticRoute);

app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`);
})