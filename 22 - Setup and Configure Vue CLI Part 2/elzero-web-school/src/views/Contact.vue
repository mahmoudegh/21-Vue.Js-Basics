<template>
  <div class="contact-us">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pageName: "Contact Us",
      pageDescription: "This Is Contact Us Page",
    };
  },
  name: "contact",
};
</script>
