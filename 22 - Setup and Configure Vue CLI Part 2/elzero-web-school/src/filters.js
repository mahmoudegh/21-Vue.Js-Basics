import Vue from "vue";

// Make uppercase
// Vue.filter("uppercase", function(v) {
//   return v.toUpperCase();
// });

// Make reverse
Vue.filter("reverse", function(v) {
  return v
    .split("")
    .reverse()
    .join("");
});

// Shorten Text
Vue.filter("shorten", function(value, textLength, suffix) {
  return value.substring(0, textLength) + suffix;
});
