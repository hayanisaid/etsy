// const sendemail   = require('sendemail');
//  sendemail.set_template_directory(process.env.TEMPLATE_DIRECTORY)
// var env = require('env2')('.env');

// var options = {
//   templateName: 'welcome',
//   context: {
//     tempalateVariableName: 'Variable Value',
//     name: 'Joe Bloggs'
//   },
//   subject: 'Welcome to Email',
//   senderEmailAddress: 'me@gmail.com',
//   toAddresses: ['hayanisaid1995@gmail.com', 'me@gmail.com'],

//   htmlCharset: 'utf16',
//   textCharset: 'utf16',
//   subjectCharset: 'utf8'
// };

// sendemail.sendMany(options, callback);

// function callback(){
//   console.log('Success')
// }


// // your app goes here
// console.log(process.env.TEMPLATE_DIRECTORY)

// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: '',
  from: '',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  server:'smtp.sendgrid.net',
  ports:587,
  password:'',
   username:''
};
sgMail.send(msg).then(res=>console.log(res)).catch(err=>console.log(err));
