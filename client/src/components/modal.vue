<template>
	 <div class="myModal" v-if='modalState'>
	<span class="close" v-on:click='ActivateModal()'>X</span>
	   <video width="100%" height="80%" autoplay="true">
	 	<source src="../assets/video.mp4" type="video/mp4">
	 </video>
	</div> 
</template>
<style src='../assets/css/modal.scss' lang='scss'></style>

<script >
	export default{
		props:['modalState'],
		methods:{
			ActivateModal:function(){
				this.modalState=false
			}
		}
	}
</script>