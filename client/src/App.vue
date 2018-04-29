<template>
  <div id="app">
    <transition name='fadeIn'>
    	  <router-view/>
    </transition>
  
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style type="text/css">
	.fadeIn-enter-active{
		opacity: 0.5;
		transition: opacity .3s ease-in
	}
</style>

