<template>
  <nav class="navbar">
    <div class="brand">
      <img src="@/assets/flowcode.jpg" alt="Logo" class="logo" />
      BOT FlowCode AI
    </div>
    <div>
      <router-link to="/" exact-active-class="active-link">APPLICATIONLINE</router-link>
      <router-link to="/abstract" exact-active-class="active-link">ABSTRACT</router-link>
      <router-link to="/contact" exact-active-class="active-link">CONTACT</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #0e5389;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.brand {
  color: white; 
  font-size: 24px; 
  font-weight: bold; 
  display: flex;
  align-items: center; 
}

.logo {
  width: 160px; 
  height: 100px; 
  margin-right: 15px; 
  border-radius: 10px; 
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.logo:hover {
  transform: scale(1.1); 
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); 
}

.navbar a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
}

.navbar a:hover {
  color: rgb(65, 234, 65);
}

.navbar .active-link {
  border-bottom: 2px solid rgb(65, 234, 65);
  color: rgb(65, 234, 65);
  font-weight: bold;
  font-size: 18px;
}
</style>
