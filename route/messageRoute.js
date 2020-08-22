const express = require('express')
const nodemailer = require('nodemailer')
const contactModel = require('../model/messageModel');

const router = express.Router();

router.post('/contact',async (req,res) => {

const data = req.body;
const contact = new contactModel({
  fname: req.body.fname,
  lname: req.body.lname,
  email: req.body.email,
  subject: req.body.subject,
  msg: req.body.msg,
});
const newcontact = await contact.save();
try {
  let smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    host: "smtp.gmail.com",
    port: 465,
    secure: false,
    auth: {
        user: 'Your EMail',
        pass: 'You Pass',
    
    }
});

let mailOptions = {
  from: data.email,
  to: 'example@gmail.com',
  subject: data.subject,
  html: `<p>${data.fname +' '+ data.lname}</p>
          <p>${data.email}</p>
          <p>${data.msg}</p>`
};
smtpTransport.sendMail(mailOptions,
  (error, response) => {
    if(error) {
     console.log(error);
    }else {
  console.log('succes');
    }
    smtpTransport.close();
  });

} catch (error) {
  console.error(err.message);
  process.exit(1);
}

})



export default router;