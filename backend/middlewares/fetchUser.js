const jwt = require('jsonwebtoken');
require('dotenv').config();

const fetchUser = (req, res, next) => {
    try {
        const authToken = req.header('authToken');

        if (!authToken) {
            return res.status(401).json({ error: "Authentication token missing" });
        }
        // console.log(authToken);

        let secValue = process.env.ACCESS_TOKEN_SECRET;
        // let secValue='123456789'
        // console.log(secValue);
        jwt.verify(authToken, secValue, (err, user) => {
            if (err) {
                return res.status(401).json({ error: "Invalid authentication token" });
            }

            // Attach the user information to the request object
            req.user = user;
            next();
        });
    } catch (error) {
        res.status(500).json({ error: "Internal server error", message: error.message });
    }
};

module.exports = fetchUser;
