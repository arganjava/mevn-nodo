import Vue from "vue";
import Router from "vue-router";
import CmsHome from "./components/cms/Home.vue";
import UserHome from "./components/user/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: '/cms', component: CmsHome },
    { path: '/', component: UserHome }
  ]
});