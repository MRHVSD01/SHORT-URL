const express = require('express');
const urlRoute = require('./Routes/url');
const { connectMongo } = require('./conection');
const URL = require('./Models/url');
require('dotenv').config();


const app = express();
const PORT = 8001;

//connection with mongoDB
connectMongo(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB is connected");
})

// to parse the body
app.use(express.json());

//routess--
app.use("/url", urlRoute);
app.get('/:shortId', urlRoute);


app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`);
})