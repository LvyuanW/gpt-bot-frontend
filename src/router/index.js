import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Layout from "@/components/Layout.vue";
import Chat from "@/views/Chat.vue";

const router = createRouter({
  history: createWebHistory(),
  routes : [
    {
      path: "/",
      name: "Layout",
      component: Layout,
      children: [
        {
          path: "home",
          name: "Home",
          component: Home
        },
        {
          path: "about",
          name: "About",
          component: About
        },
        {
          path: "chat",
          name: "Chat",
          component: Chat
        }
      ]
    },
  ]
});

export default router;