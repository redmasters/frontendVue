import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VeeValidate from 'vee-validate';

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VeeValidate);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: '/index'
    },
    {
      path: "/create",
      name: "create",
      component: () => import("./components/Create.vue")
    },
    {
      path: "/edit/:id",
      name: "index",
      component: () => import('./components/Edit.vue')
    },
    {
      path: "index",
      name: "index",
      component: () => import("./components/Index.vue")
    }
  ]
})


new Vue({
  render: h => h(App),
}).$mount('#app')
