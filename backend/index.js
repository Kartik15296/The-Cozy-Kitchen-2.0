const express = require('express');
const app = express()
const port = 5000
const MongoDb = require("./db")

MongoDb()

app.get("/", (req, res) => {
    res.send("got req")
})

app.listen(port, () => {
    console.log(`server is listening at ${port} `)
})