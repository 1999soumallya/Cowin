const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');


JWT_SERECT ='SoumallyaIsABadBoy'
// Create a user using : POST "/api/auth/". Doesn't required to login

router.post('/CreateUser',[
    body('name','Enter a valid name').isLength({ min: 3 }),
    body('email/ph_no','Enter a valid email or ph_no'),
    body('password','Password must be atleast 5 characters').isLength({ min: 5 }),
    body('address','Enter your Address').isLength({ min: 3 }),
    body('city','Enter your city').isLength({ min: 3 }),
    body('state','Please enter your state').isLength({ min: 3 }),
    body('zip','Enter your zip code').isLength({ min: 6})
], async(req, res) =>{
  // Ifthere are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Check Whether the user is already exists with same email
    try {
      let user = await User.findOne({email: req.body.email});
      if(user){
        return res.status(400).json({error: "Sorry a user with this email/ph_no is already exists"})
      }
      const salt = await bcrypt.genSalt(10);
      const secpass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: secpass,
          address: req.body.address,
          city: req.body.city,
          state: req.body.state,
          zip: req.body.zip,
        });
      const data = {
        user:{
          id: user.id
        }
      }
      const jwtData = jwt.sign(data,JWT_SERECT);
      res.json({jwtData})
    }
    catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
})

module.exports = router