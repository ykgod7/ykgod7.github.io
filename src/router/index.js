import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue"
import ProjectPage from "../pages/ProjectPage.vue"
import ResumePage from "../pages/ResumePage.vue"
import ProjectDetail from "@/pages/ProjectDetail.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/projects", component: ProjectPage },
    { path: "/projects/:slug", component: ProjectDetail },
    { path: "/resume", component: ResumePage },
  ],
});

export default router;
