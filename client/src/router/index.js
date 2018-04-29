import Vue from 'vue'
import Router from 'vue-router'
import login from './../login'
import home from './../home'
import survey from './../components/survey'
import thanks from './../components/thanks'
//import loginSuccess from './../components/loginSuccess'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
     {
      path: '/login',
      name: 'login',
      component: login
    },
   
    {
      path: '/survey',
      name: 'survey',
      component: survey
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: thanks
    }

    /* {
      path: '/loginSuccess/:name',
      name: 'loginSuccess',
      component: loginSuccess
    },*/
  ]
})
