import Vue from "vue";

// Global Directive
// Make Format custom directive
Vue.directive("format", {
  bind: function(el, binding) {
    el.style.fontSize = binding.value + "px";

    // Bold Modifire
    if (binding.modifiers.bold) {
      el.style.fontWeight = "bold";
    }

    // Orange Modifire
    if (binding.modifiers.orange) {
      el.style.color = "orange";
    }
  }
});
