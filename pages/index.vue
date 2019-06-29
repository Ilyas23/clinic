<template>
  <div>
    <app-carousel />
    <app-services :services="services"/>
    <app-post :news="news"/>
  </div>
</template>

<script>
import AppCarousel from '@/components/main/Carousel'
import AppServices from '@/components/main/Services'
import AppPost from '@/components/main/Post'
export default {
  head: {
    title: `Главная | ${process.env.appName}`
  },
  components: {
    AppCarousel,
    AppServices,
    AppPost
  },
  async asyncData({store}){
    const services = await store.dispatch('service/fetchService')
    const news = await store.dispatch('news/fetchNews')
    return {services, news}
  }
}
</script>