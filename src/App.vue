<template>
  <div id="app">
    <appNavbar />
    <router-view />
    <appFooter />
  </div>
</template>

<script>
import appNavbar from './components/appNavbar.vue';  
import appFooter from './components/appFooter.vue';  

export default {
  components: {
    appNavbar,  
    appFooter   
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  text-align: center;
}
</style>
