<template>
  <div id="app">
    <appNavbar />
    <router-view />
    <appFooter />
  </div>
</template>

<script>
import appNavbar from './components/appNavbar.vue';  // อัปเดตชื่อไฟล์ที่ถูกต้อง
import appFooter from './components/appFooter.vue';  // อัปเดตชื่อไฟล์ที่ถูกต้อง

export default {
  components: {
    appNavbar,  // อัปเดตชื่อ component
    appFooter   // อัปเดตชื่อ component
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
