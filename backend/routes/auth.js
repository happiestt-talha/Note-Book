const express=require('express')
const router =express.Router();
const User=require('../models/User')
router.get('/',(req,res)=>{
    console.log(req.body);
    // res.json(obj)
    const user=User(req.body);
    user.save();
    res.send('Hello from Auth Body');
    // res.send(req.body)
})
module.exports=router 