<template>
	<div class="header">
	<div class="container">
	             <div class="header-top">
					<img src="../assets/images/Etsy-logo.png" class="responsive-img logo float-left">
					<router-link to='/login' class='float-right'>
					<button class="btn btn-default" to='/login'>Start Survey</button>
					</router-link>
				</div>
				
				<div class="text-center main">
					<h1>Help Us Make Etsy Better</h1>
					<p>
						opening a case against a seller means we should update our politicies and make sure it never happen again in the future.we apologize for the bad experince we are delightfull happy to provide a special discount when you complete the survey
					</p>
					<div class="main-footer">
						<button class="btn btn-outline-default" v-on:click='lanchModal()'>Watch video</button>
						<button class="btn btn-secondary" v-on:click='goTologin' >Start Survey</button>
					</div>
				</div>
	</div>
	<modal v-if='modalIsActive' modalState='modalIsActive'/>
	</div>
</template>
<script>
  import route from 'vue-router';
  import modal from './modal'
	export default{

        data(){
         return {
         	modalIsActive:false
         }
        },
		methods:{
			/*goTologin:function(){
				return this.$route.push({name:'login',path:'/login'})
			},*/
			lanchModal:function(){
				this.modalIsActive=(this.modalIsActive===false)?true:false
			},
			goTologin:function(){
				this.$router.push({name:'login'})
			}
		},
		components:{
			modal
		}
	}
</script>
<style src='../assets/css/header.scss' lang='scss'>

</style>