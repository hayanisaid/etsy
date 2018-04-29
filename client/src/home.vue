<template>
    <div class="msain">
      <HeaderPage/>
      <bodyPage/>
      <footerPage/>
    </div>
</template>

<script>
import './../node_modules/bootstrap/scss/bootstrap.scss';
import HeaderPage from './components/headerPage';
import bodyPage from './components/bodyPage';
import footerPage from './components/footerPage';
import axios from 'axios'

export default {
  name:'home',
  components: {
    HeaderPage,
    bodyPage,
    footerPage
  },
   async asyncData ({ params }) {
    let { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    return { title: data.title }
  }
}
</script>

<style>

</style>
