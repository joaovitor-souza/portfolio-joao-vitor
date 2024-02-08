import Contact from "@/views/Contact.vue";
import Home from "@/views/Home.vue";
import Projects from "@/views/Projects.vue";
import Skills from "@/views/Skills.vue";
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";


const routes:RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home 
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/skills',
    name: 'Skils',
    component: Skills
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router