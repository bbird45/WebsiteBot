<template>
  <nav class="navbar">
    <div class="brand">
      <!-- เพิ่มรูปภาพที่นี่ -->
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
  color: white; /* สีขาว */
  font-size: 24px; /* ขนาดตัวอักษรที่ใหญ่ขึ้น */
  font-weight: bold; /* ตัวหนา */
  display: flex;
  align-items: center; /* จัดให้อยู่แนวเดียวกัน */
}

.logo {
  width: 160px; /* กำหนดขนาดของรูปภาพ */
  height: 100px; /* กำหนดขนาดของรูปภาพ */
  margin-right: 15px; /* เพิ่มระยะห่างระหว่างรูปภาพและข้อความ */
  border-radius: 10px; /* ทำมุมโค้งมนให้กับรูปภาพ */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* เอฟเฟกต์การเคลื่อนไหวเมื่อ hover */
}

.logo:hover {
  transform: scale(1.1); /* ขยายรูปภาพเมื่อ hover */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); /* เพิ่มเงาให้เด่นขึ้นเมื่อ hover */
}

.navbar a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
}

.navbar a:hover {
  color: rgb(65, 234, 65);
}

/* เพิ่มขีดเส้นใต้สีเขียว, เปลี่ยนสีตัวหนังสือให้เป็นสีเขียว, เพิ่มขนาดตัวหนังสือและตัวหนา */
.navbar .active-link {
  border-bottom: 2px solid rgb(65, 234, 65);
  color: rgb(65, 234, 65);
  font-weight: bold;
  font-size: 18px;
}
</style>
