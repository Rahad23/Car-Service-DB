const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const { query, response } = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.xa1zyf9.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


  const collection = client.db("carService").collection("service");



app.get("/", (req, res)=>{
    res.send("Server is running");
})

app.listen(port,()=>{
    console.log(`server running ${port} port`);
})
