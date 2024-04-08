const express=require('express')
const bcrypt=require('bcrypt')
const { body, validationResult } = require('express-validator');

const router =express.Router();
const User=require('../models/User')

router.post('/',[
    //get data from request body
    body('name').isLength({min:3}).withMessage('Name with 3 character is appreciated'),
    body('email').isEmail().withMessage('Not a valid email bro'),
    body('password').isLength({ min: 5 }).withMessage('Itna Chota Password!!')
],async (req,res)=>{

    //check if errors exist
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    //create user now using info given in request

        //hash user's passsword
        const hashedPassowrd= await bcrypt.hash(req.body.password,10)//give saltRounds as argument to hash password

        //check if user is already logged in from provided email
        const chkUser=await User.findOne({email:req.body.email});
        if(chkUser){
            return res.status(400).json({error:"User already exists"})
        }
    User.create({
        name:req.body.name,
        email:req.body.email,
        password:hashedPassowrd
    }).then(user=>{res.json(user)})
    .catch(err=>{console.log(err)
    res.json({error:"An Error occured",message:err.message})})

})
module.exports=router 