<template>
  <div>
    <el-breadcrumb style="margin-left: 4rem;" separator="/">
      <el-breadcrumb-item to="/">Главная</el-breadcrumb-item>
      <el-breadcrumb-item>Новости</el-breadcrumb-item>
    </el-breadcrumb>
    <app-news :news="news" />
  </div>
</template>

<script>
import AppNews from '@/components/main/Post'
export default {
  components: {
    AppNews
  },
  async asyncData({store}){
    const news = await store.dispatch('news/fetchNews')
    return {news}
  }
}
</script>