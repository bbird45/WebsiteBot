import { createApp } from 'vue';
import App from './App.vue';
import router from './routers/router';  // เปลี่ยนเส้นทางจาก './router' เป็น './routers/router'

createApp(App).use(router).mount('#app');
