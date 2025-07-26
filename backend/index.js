const express = require('express');
const app = express()
const port = 5000
const mongoose = require('mongoose')

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

(async () => {
    const MongoDb = require("./db");
    await MongoDb();

    app.use(express.json())
    app.use('/api', require('./Routes/createUser'))
    app.use('/api', require('./Routes/Displaydata'))
    app.get("/", (req, res) => {
        res.send("got req")
    })


    app.listen(port, () => {
        console.log(`server is listening at ${port} `)
    })
})()