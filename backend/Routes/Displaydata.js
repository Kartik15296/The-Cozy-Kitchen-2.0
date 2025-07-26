const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')

router.get('/displayData', async (req, res) => {

    try {
        const database_data = mongoose.connection.db.collection("foodCategory");
        data = await database_data.find({}).toArray()
        console.log(data);
        return res.json({ success: true, data: data, msg: "Success" })
    }
    catch (err) {
        console.error(err)
        console.log("catogory data not found");
        return res.json({ success: false, data: null, msg: "catogory data not found" })
    }
})

module.exports = router;