const express = require('express')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const fetchUser = (req, res, next) => {
    try {


        const authHeader = req.headers['authorization'];
        const authToken = authHeader && authHeader.split(' ')[1];

        if (!authToken) return res.sendStatus(401).json({ ERROR: "You didn't provided access Token yet..." })
        jwt.verify(authToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) return res.sendStatus(403).json({ ERROR: "You don't have access with this token..." })
            req.user = user
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