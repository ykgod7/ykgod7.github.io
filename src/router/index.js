import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue"
import ProjectPage from "../pages/ProjectPage.vue"
import ContactPage from "../pages/ContactPage.vue"
import ResumePage from "../pages/ResumePage.vue"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/projects", component: ProjectPage },
    { path: "/contact", component: ContactPage },
    { path: "/resume", component: ResumePage },
  ],
});

export default router;
