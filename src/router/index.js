import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({  
  history: createWebHistory(""),  
  routes: [    
    {      
      path: "/",      
      name: "Main",      
      component: () => import("../components/MainPage.vue"),    
    },    
    {      
      path: "/detail/:id",      
      name: "Detail",      
      component: () => import("../components/DetailPage.vue"),    
    },  
  ],
}); 

export default router;
