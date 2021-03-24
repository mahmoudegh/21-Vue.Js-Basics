<template>
  <div class="our-help">
    <h1>{{ pageName }}</h1>
    <p v-bold.red>{{ pageDescription }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pageName: "Help",
      pageDescription: "This Is Help Page",
    };
  },
  name: "help",

  // Local Directive
  directives: {
    bold: {
      bind: function (el, binding) {
        el.style.fontWeight = "bold";

        if (binding.modifiers.red) {
          el.style.color = "red";
        }
      },
    },
  },
};
</script>
