<template>
<!-- 	<div class="myModal" v-if='modalState'>
	<span class="close" v-on:click='ActivateModal()'>X</span>
	<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/265560100" style="position:absolute;top:2%;left:10%;width:80%;height:80%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
	<p><a href="https://vimeo.com/265560100">Help Us Make Etsy Better</a> from <a href="https://vimeo.com/etsyglobal">Etsy</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
	</div> -->
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