const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const fatchuser = require('../middleware/fatchuser');
JWT_SERECT = 'SoumallyaIsABadBoy'

// Create a user using : POST "/api/auth/login". Doesn't required to login
router.post('/login', [
  body('email/ph_no','Enter a valid email or ph_no'),
  body('password', 'Enter your password').exists(),
], async (req, res) => {
  let success = false;
  // Ifthere are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email })
    if (!user) {
      success = false
      return res.status(400).json({ success, error: "User is not exists" })
    }
    const passwordcompare = await bcrypt.compare(password, user.password);
    if (!passwordcompare) {
      success = false
      return res.status(400).json({ success, error: "Pleace try to login with correct credintials" });
    }

    const paylode = {
      user: {
        id: user.id
      }
    }

    const authtoken = jwt.sign(paylode, JWT_SERECT);
    success = true;
    const token = authtoken;
    if (!token) {
      res.status(401).send({ error: "Please authenticate using valid token" })
    }
    try {
      const data = jwt.verify(token, JWT_SERECT);
      req.user = data.user;
      userId = req.user.id;
      const user = await User.findById(userId).select("-password")
      res.send(user)
    } catch (error) {
      res.status(401).send({ error: "Please authenticate using valid token" })
    }
  }
  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

// Create a user using : POST "/api/auth/getuser". Required to login
// router.post('/getuser', fatchuser, async (req, res) => {
//   try {
//     userId = req.user.id;
//     const user = await User.findById(userId).select("-password")
//     res.send(user)
//   }
//   catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal server error");
//   }
// sanchariiseverythingforme
// })

module.exports = router  