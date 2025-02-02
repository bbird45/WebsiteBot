import { createRouter, createWebHistory } from 'vue-router';
import Applicationline from '../views/Applicationline.vue';  // อัพเดตเส้นทางให้ถูกต้อง
import Abstract from '../views/Abstract.vue';      // อัพเดตเส้นทางให้ถูกต้อง
import Contact from '../views/Contact.vue';        // อัพเดตเส้นทางให้ถูกต้อง

const routes = [
  { path: '/', component: Applicationline },
  { path: '/abstract', component: Abstract },
  { path: '/contact', component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
