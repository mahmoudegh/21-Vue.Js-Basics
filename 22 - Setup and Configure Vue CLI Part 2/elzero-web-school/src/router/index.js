import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import About from "../views/About.vue";
import Help from "../views/Help.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/help",
    name: "help",
    component: Help
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
