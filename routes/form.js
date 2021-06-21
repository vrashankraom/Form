const express = require('express');
const router = express.Router();
const Form = require('../models/Form');
const { check, validationResult } = require('express-validator');
const nodemailer = require("nodemailer");
const config =require('config');
const password = config.get('password');

router.post(
    '/',
    [
      check('name', 'Please include your name').not().isEmpty(),
      check('dob', 'Date of Birth is required').not().isEmpty(),
      check('email', 'Please include a valid email').isEmail(),
      check('phone', 'Please include a Phone Number').not().isEmpty(),
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      var today = new Date();
      var birthDate = new Date(req.body.dob);
      var age = today.getFullYear() - birthDate.getFullYear();
      
      if(age<18){
        return res.status(400).json({ ageerror: "Age must be atleast 18 years!" });
      }
      var phoneno = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
       
      if(!phoneno.test(req.body.phone)){
        return res.status(400).json({ phoneerror: "Please enter a valid phone number!" });
      }


      try {
        const newForm = new Form({
            name: req.body.name,
            email:req.body.email,
            dob:req.body.dob,
            phone:req.body.phone
            });
    
          const form = await newForm.save();
          //send a mail to user
          let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'vrashankrao@gmail.com',
              pass: password,
            },
          });
        
          let info = await transporter.sendMail({
            from: '"vrashank rao" <vrashankrao@gmail.com>',
            to: req.body.email,
            subject: "Form filled successfully!", 
            text: "Here is the details:-?",
            html: `<h2>Name:- ${req.body.name}</h2>
                   <h2>Email:- ${req.body.email}</h2>
                   <h2>Phone Number:- ${req.body.phone}</h2>
                   <h2>Date of Birth:- ${req.body.dob}</h2>`
          });
          res.json(form);
      }catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
    }
);

router.get('/success',async (req, res) => {
    try {
      const forms = await Form.find();
      res.json(forms);
    }catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports =router;