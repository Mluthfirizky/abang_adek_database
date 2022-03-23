<template>
  <div id="app">
    <navbar v-if="this.$route.name != 'Register' && this.$route.name != 'Login'"/>
    <router-view :class="this.$route.name != 'Register' && this.$route.name != 'Login' ? 'view' : ''"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar 
  }
}
</script>

<style>
*{
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 0;
  box-sizing: border-box;
}
body{
  background-color: #F2F2F2 !important;
  overflow-x: hidden;
}
a{
  text-decoration: none !important;
  

}
.view{
  margin-left: 80px;
  transition: 0.3s;
}
@media (max-width: 888px){
  .view{
  margin-left: 0px;
}
}
</style>
