const express=require('express')
const { body, validationResult } = require('express-validator');

const router =express.Router();
const User=require('../models/User')

router.post('/',[
    body('name').isLength({min:3}).withMessage('Name with 3 character is appreciated'),
    body('email').isEmail().withMessage('Not a valid email bro'),
    body('password').isLength({ min: 5 }).withMessage('Itna Chota Password!!')
],(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }).then(user=>{res.json(user)})
    .catch(err=>{console.log(err)
    res.json({error:"Email already exists, enter a unique one please.",message:err.message})})
})
module.exports=router 