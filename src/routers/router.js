import { createRouter, createWebHistory } from 'vue-router';
import Applicationline from '../views/Applicationline.vue';  
import Abstract from '../views/Abstract.vue';      
import Contact from '../views/Contact.vue';        

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
