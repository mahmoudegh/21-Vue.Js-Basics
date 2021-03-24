<template>
  <div class="post-box">
    <span class="post-views"> {{ views }} </span>
    <h3 class="post-title">{{ title | reverse }}</h3>
    <span class="post-date"> {{ date }} </span>
    <p class="post-content">
      {{ content | shorten(10, " ..More") | reverse }}
    </p>
    <div class="row">
      <div class="col-sm-6">
        <span class="post-author"> {{ author }} </span>
      </div>
      <div class="col-sm-6 text-right">
        <span class="post-category"> {{ category }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["views", "title", "date", "content", "author", "category"],
  name: "post",
};
</script>

<style lang="scss" scoped>
.post-box {
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px #ddd;
  text-align: left;
  position: relative;
  .post-views {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: #4caf50;
    padding: 1px 5px;
    color: #fff;
    font-weight: bold;
    text-align: center;
    border-radius: 4px;
  }
  .post-date {
    display: block;
    padding: 0 0 5px;
    color: #888;
    font-size: 14px;
  }
  .post-content {
    line-height: 1.8;
    color: #666;
  }
  .post-author {
    background-color: #607d8b;
  }
  .post-category {
    background-color: #e91e63;
  }
  .post-author,
  .post-category {
    padding: 6px 10px;
    border-radius: 4px;
    color: #fff;
  }
}
</style>