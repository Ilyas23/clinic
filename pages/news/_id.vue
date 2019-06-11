<template>
  <div class="news">
    <el-breadcrumb class="mb" separator="/">
      <el-breadcrumb-item to="/">Главная</el-breadcrumb-item>
      <el-breadcrumb-item to="/news">Новости</el-breadcrumb-item>
      <el-breadcrumb-item>{{news.title}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="container">
      <h1 class="mb">{{news.title}}</h1>
      <img class="mb" style="width: 50%; height: auto;" :src="news.imageUrl" alt="">
      <vue-markdown class="mb">{{news.text}}</vue-markdown>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({store, params}){
    const news = await store.dispatch('news/fetchNewsById', params.id)
    return {news}
  }
}
</script>


<style scoped>
  .news{
    width: 77%;
    margin: 0 auto;
  }
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
