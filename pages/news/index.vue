<template>
  <div>
    <app-news :news="news" />
  </div>
</template>

<script>
import AppNews from '@/components/main/Post'
export default {
  head: {
    title: `Новости | ${process.env.appName}`
  },
  components: {
    AppNews
  },
  async asyncData({store}){
    const news = await store.dispatch('news/fetchNews')
    return {news}
  }
}
</script>