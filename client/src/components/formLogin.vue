<template>
	<div class="loginForm">
		<div class="main">
			<form @submit.prevent='loginToserv' v-if='!success'>
				<div  class="form-group">
					<div class="input-group"> 

						<label class="label-group col-md-12">Email or Username</label>
						<input 
						type="text"
						 name="username"
						  placeholder="Type Username"
						   class="form-control"
						   v-model='usernameLogin'
						   required="required">
					</div>
					</div>
					<div  class="form-group">
					<div class="input-group">
						<label class="label-group col-md-12">Password</label>
						<input 
						type="password"
						 name="passord"
						  placeholder="Password **"
						   class="form-control"
						    v-model='passLogin'
						    required="required">
					</div>
					</div>
					<div  class="form-group">
					<div class="input-group">
						<input 
						type="checkbox"
						 name="keep-login"
						   class="checkbox-costum">
						   <label class="label-group-cheked">Keep Login</label>
					</div>
					</div>
					<input type="Submit" class="btn btn-default btn-block" value="Sing in" >
					<ul class="list-unstyled">
						<li><a href="">Forgot your passowrd?</a></li>
						<li><a href="">Forgot your Email or Username?</a></li>
						<li><a href="">Reaopen your Account?</a></li>
					</ul>
			
			</form>
			   
				<div v-if='success'>
				<survey userlogin='this.usernameLogin' logigSuss/>
				</div>
		</div>
	</div>
</template>
<style src='../assets/css/formLogin.scss' lang='scss'></style>
<script >
// import components
import loginSuccess from './loginSuccess';
import survey from './survey'

	export default{
     components:{
     	loginSuccess,
     	survey
     },
     data(){
     	return{
     		success:false,
     		usernameLogin:'',
     		passLogin:''
     	}
     },
     methods:{
     	loginToserv:function(){
     		let user=this.usernameLogin;
     		this.success=true;
     		this.$router.push({name:'loginSuccess',params:{name:user}})
     	}
     }
	}
</script>
