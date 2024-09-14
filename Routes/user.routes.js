const express = require('express');
const {login,signUp} = require('../Controllers/user.controller');

let router=express.Router()


router.post("/signup",signUp)
router.post("/login",login)

 
module.exports=router