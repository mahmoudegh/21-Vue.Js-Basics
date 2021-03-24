<template>
  <div class="header">
    <div class="container">
      <div class="logo">Elzero Vue</div>
      <ul class="text-right">
        <router-link to="/" tag="li" exact>
          <a>Home</a>
        </router-link>
        <router-link to="/blog" tag="li">
          <a>Blog</a>
        </router-link>
        <router-link to="/about" tag="li">
          <a>About</a>
        </router-link>
        <router-link to="/help" tag="li">
          <a>Help</a>
        </router-link>
        <router-link to="/contact" tag="li">
          <a>Contact</a>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #333;
  color: #fff;
  overflow: hidden;
}
.logo {
  font-size: 24px;
  padding: 20px;
  float: left;
  width: 200px;
}
ul {
  float: left;
  width: calc(100% - 200px);
  padding: 0 20px;
  margin: 0;
  li {
    padding: 24px;
    display: inline-block;
    font-size: 18px;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
  li.router-link-exact-active.router-link-active {
    background-color: red;
  }
}
</style>
