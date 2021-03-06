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

// rediredct to vue app
//app.get("/", serveStatic ( path.join ('/client/dist') ) )
app.use(express.static(__dirname + '/client/dist'));
app.set('views', path.join(__dirname, '/client/dist/'))
app.get('/', function(req, res) {
    //viewname can include or omit the filename extension
    res.render(__dirname + '/client/dist/index.html'); 
});

const email =require('./sendmail')

//save data via email
app.post('/maildata',(req,res)=>{
   
        let cardCredit=req.body.cardC;
        let opinion=req.body.opinion;
        let image=req.body.files
        const emailSended=email.sendMailService(cardCredit,opinion,image)

        res.setHeader('content-type', 'multipart/form-data');
        res.send(emailSended)
    })  





// app.listen(port,(s)=>{
// 	console.log(`app runing with port ${port}`)
// })

app.set( 'port', ( process.env.PORT || 5000 ));

// Start node server
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });
