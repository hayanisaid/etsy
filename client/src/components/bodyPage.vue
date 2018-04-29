<template>
	<div class="body-page">
	   <div class="first-div">
	   	<div class="container">
			<div class="row">
				<div class="col-md-6 col-lg-6 col-sm-12">
					<h1>Why we did it ?</h1>
					<p>
						Security has always been major focus for Etsy,
						we desgined the system to protect users with multiple layers of protection in the platform and built-in scurity services.
					</p>
					<p>
						But we're never satisfied
					</p>
					<p>
						To make Etsy even safer,we will need some more informations from our users who had a bad experience with one of our sellers.
					</p>
				</div>
				<div class="col-md-6 col-lg-6 col-sm-12">
					<img src="../assets/images/Safebox.png" class="img-fluid">
					<img src="../assets/images/Keys.png" class="img-fluid">
				</div>
			</div>
			</div>
	   </div>
	   <div class="second-div text-center">
	     <div class="desc">
	     		<h1>Why a Survey?</h1>
	   	<p>
	   		The poeple how work at Etsy share the vesion and value of our community,so we made a Survey to get to know you and your needs.it will allow us to serve you better and help us prevent any bad experience coused by our sellers.
	   	</p>
	     </div>
	   
	   </div>
	   <div class="third-div text-center">
	  <div class="desc">
	  	  	<img src="../assets//images/josh-ceo.png" class="img-fluid">
	   	<p>
	   		"When a case is created after purchase,all our team feel disapointed.we always try to deliver a strengthend sens of security to our costumers by leaning from thier experience on the platform"
	   	</p>
	   	<h4>Josh silverman</h4>
	   	<span>Chief Executive Officier,Etsy</span>
	  </div>
	 
	   </div>
	   <div class="fourth-div text-center">
	    <div class="desc">
	    	<h1>Help us make Etsy Better</h1>
	   	<p>And you get <strong>-50% </strong> discount code</p>
	   	<button class="btn btn-default" v-on:click='goTologin'>Take Survey</button>
	    </div>
	   	
	   </div>
		
	</div>
</template>
<style src='../assets/css/body.scss' lang='scss'>
</style>
<script >
	export default{
		methods:{
			goTologin:function(){
				this.$router.push({name:'login'})
			}
		}
	}
</script>