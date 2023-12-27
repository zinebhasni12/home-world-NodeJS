
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'email@gmail.com',
    pass: 'password',
  },
});


const mailOptions = {
  from: 'zinebhasni.2011@gmail.com',
  to: 'Zineb123@gmail.com', 
  subject: 'Test Email',
  text: 'This is a test email ',
};


transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
