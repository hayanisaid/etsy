<template>
	<div class="loginSuccess">
		<div class="main ">
			<h3>Hi {{this.$route.params.name}},</h3>
			 <div class="text-center">
			 	<h4>
				You joined on August 10,2013
				and you have already opened a case on Etsy
			</h4>
			<button class="btn btn-default" v-on:click='goSurvey'>Continue to Survue</button>
			 </div>
			
		</div>
	</div>
</template>
<style src='../assets/css/successLogin.scss' lang='scss'></style>
<script >
	export default{
		name:'loginSuccess',
		props:['userlogin','islogedIn'],
		methods:{
			goSurvey:function(){
               this.$router.push({name:'survey'})
			}
		}
	}
</script>