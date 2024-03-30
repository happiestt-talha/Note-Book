const express=require('express')
const { body, validationResult } = require('express-validator');

const router =express.Router();
const User=require('../models/User')

router.post('/',[
    body('email').isEmail().withMessage('Not a valid email bro'),
    body('password').isLength({ min: 5 }).withMessage('Itna Chota Password!!')
],(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);
    const user=User(req.body);
    user.save();
    res.send('Hello from Auth Body');
})
module.exports=router 