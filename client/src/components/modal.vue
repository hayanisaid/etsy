<template>
	 <div class="myModal" v-if='modalState'>
	<span class="close" v-on:click='ActivateModal()'>X</span>
	   <div class="vid">
         <iframe src="https://player.vimeo.com/video/265560100" 
	 width="100%" height="500" frameborder="0"
	  webkitallowfullscreen mozallowfullscreen allowfullscreen>
	 </iframe>
	   </div>
	
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



// <video width="100%" height="80%" autoplay="true">
// 	 	<source src="../assets/video.mp4" type="video/mp4"></video>