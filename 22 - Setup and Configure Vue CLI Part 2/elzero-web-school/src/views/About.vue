<template>
  <div class="about">
    <h1 v-format.bold.orange="50">{{ pageName }}</h1>
    <p v-bold v-font="50">{{ pageDescription }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pageName: "About Us",
      pageDescription: "This Is About Us Page",
    };
  },
  name: "about",
};
</script>
