const express = require("express")
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');

router.post('/createUser',
    [
        body('email', 'Incorrect Email').isEmail(),
        body('Password', 'Incorrect Password').isLength({ min: 5 }),
        body('name', 'Incorrect Name').isLength({ min: 3 })
    ],

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log("Create user Credintial Wrong")
            return res.status(400).json({ data: false, errors: errors.array(), msg: "Pass min 5 and name min 3" })
        }

        try {
            let userdata = await User.findOne({
                email: req.body.email
            })

            if (userdata) { console.log(userdata); return res.status(400).json({ data: false, msg: "User With Same Email Alredy Exists" }) }
            else {
                try {
                    salt = await bcrypt.genSalt(10);
                    hashedPass = await bcrypt.hash(req.body.Password, salt)

                    await User.create({
                        name: req.body.name,
                        location: req.body.location,
                        email: req.body.email,
                        Password: hashedPass
                    })
                    res.json({ data: true });

                }
                catch (err) {
                    console.log("Error in creating user", err);
                    res.json({ data: false, msg: "Error from Backend while creating the User" });
                }
            }
        }
        catch (err) {
            console.log("Error in Finding user", err);
            res.json({ data: false, msg: "Error from backend while finding if user exists" });
        }
    })


router.post('/loginUser', async (req, res) => {

    try {
        let userdata = await User.findOne({
            email: req.body.email
        })

        if (!userdata) { res.status(400).json({ data: false, errors: "User not found with given Mail" }) }
        else {
            const result = await bcrypt.compare(req.body.password, userdata.Password)
            if (result) res.json({ data: true });
            else res.status(400).json({ data: false, errors: "Incorrect Password" });
        }

    }
    catch (err) {
        console.log("Error in Finding user", err);
        res.json({ data: false, errors: "Error from Backend to fetch user" });
    }

})

module.exports = router;
