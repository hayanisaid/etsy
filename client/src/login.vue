<template>
	<div class="login">
	     <div class="logo">
	     	<img src="./assets/images/Etsy-logo.png" class="img-fluid">
	     </div>
		<formLogin/>
		<footerPage/>
	</div>
</template>
<script >
import './../node_modules/bootstrap/scss/bootstrap.scss';
	import formLogin from './components/formLogin'
	import footerPage from './components/footerPage'

	

	export default{
		components:{
			formLogin,
			footerPage
			
			

		},
		data (){
			return{
				succes:true
			}
		}
	}
		
	
</script>
<style scoped lang='scss'>
	.logo img{
    width: 5em;
    margin: 1em;
	}
</style>