const express = require('express')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const fetchUser = (req, res, next) => {
    try {


        const authToken = req.header('authtoken');
        // console.log("authToken: ",authToken);

        if (!authToken) return res.json({ ERROR: "You didn't provided access Token yet..." })

        jwt.verify(authToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) return res.json({ ERROR: "You don't have access with this token..." })
            req.user = user

        // console.log("req.user: ",req.user);
            next()
        })
    } catch (error) {
        res.json({
            message: "Some Error occures",
            ERROR: error.message
        })
    }
}

module.exports = fetchUser