import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("@/views/Main.vue"),
    children:[
      {
        path:"/",
        name:"home",
        component:()=>import("@/views/Home/Home")
      },
      {
        path:"/video",
        name:"video",
        component:()=>import("@/views/VideoManager/VideoManager")
      },
      {
        path:"/user",
        name:"user",
        component:()=>import("@/views/UserManager/UserManager")
      },
      {
        path:"/page1",
        name:"page1",
        component:()=>import("@/views/Others/PageOne")
      },
      {
        path:"/page2",
        name:"page2",
        component:()=>import("@/views/Others/PageTwo")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
