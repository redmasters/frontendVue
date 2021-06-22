<!--
<template>
  <div id="app">
    <Navbar/>
     <img alt="Vue logo" src="./assets/logo.png">
  <Users/>
   </div>
</template> -->

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <h2><router-link to="/index">Subs</router-link></h2>
        <router-link to="/create"
          class="btn btn-sm btn-primary">Add sub
        </router-link>

        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
//import Navbar from './components/Navbar.vue'
//import Users from './components/Users.vue'
import Index from './components/Index.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    //Navbar,
    //Users,
    Index,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
