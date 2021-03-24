import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";
import "normalize.css";
import "./filters"; // Global Filters
import "./directives";

Vue.config.productionTip = false;

// Make bold custom directive
Vue.directive("bold", {
  bind: function(el) {
    el.style.fontWeight = "bold";
  }
});

// Make dynamic font size custom directive
Vue.directive("font", {
  bind: function(el, binding) {
    el.style.fontSize = binding.value + "px";
    // console.log(`Directive Value => ${binding.value}`);
    // console.log(`Directive Name => ${binding.name}`);
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
