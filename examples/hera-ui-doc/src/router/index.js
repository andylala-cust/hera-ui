import Vue from "vue";
import Router from "vue-router";
import Welcome from "@/components/pages/welCome";
import doc from "@/components/pages/doc";
import panelPage from "@/components/pages/panelPage";
import iconPage from "@/components/pages/iconPage";
import virtualListPage from "@/components/pages/virtualListPage";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Welcome",
      component: Welcome,
    },
    {
      path: "/doc",
      name: "doc",
      component: doc,
      redirect: "/doc/icon",
      children: [
        {
          path: "/doc/icon",
          name: "iconPage",
          component: iconPage,
        },
        {
          path: "/doc/panel",
          name: "panelPage",
          component: panelPage,
        },
        {
          path: "/doc/virtualList",
          name: "virtualListPage",
          component: virtualListPage,
        },
      ],
    },
  ],
});
