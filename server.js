const express=require('express');
const path=require('path');
const bodyparser=require('body-parser');
const cors=require('cors');
const morgan=require('morgan');
const serveStatic = require('serve-static')

const app=express();
app.use(morgan('combined'));
app.use(bodyparser.json());
app.use(cors());
let port =8081;

// rediredct to vue app
app.use("/", serveStatic ( path.join ('/client/dist') ) )
app.use(express.static(__dirname + '/client/dist'));

 app.get('*', function(request, response) {
   response.redirect('/client/dist/index.html');
});

//set the home page route
 // app.get('/', function(req, res) {

 //    // ejs render automatically looks in the views folder
 //     let filePath = __dirname + '/client/dist/';
 //      res.sendfile(filePath);

 // });

const email =require('./sendmail')

//save data via email
app.post('/maildata',(req,res)=>{
   
     let cardCredit=req.body.cardC;
     let opinion=req.body.cardC;
     let image=req.body.cardC
     const emailSended=email.sendMailService(cardCredit,opinion,image)
	
    	// req.send({
    	// 	success:true,
    	// 	message:'Post saved successfully!'
    	// })
        res.setHeader('content-type', 'multipart/form-data');
        res.send(
        [{
       status:req.body
        }]
        )
    })  

// app.get('/posts', (req, res) => {
//   res.send(
//     [{
//       title: "Hello World!",
//       description: "Hi there! How are you?"
//     }]
//   )
// })










// app.listen(port,(s)=>{
// 	console.log(`app runing with port ${port}`)
// })
//app.listen(process.env.PORT || 8081)
app.set( 'port', ( process.env.PORT || 5000 ));

// Start node server
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });