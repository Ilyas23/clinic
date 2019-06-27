<template>
  <div>
    <app-services :services="services" />
  </div>
</template>

<script>
import AppServices from '@/components/main/Services'
export default {
  components: {
    AppServices
  },
  async asyncData({store}){
    const services = await store.dispatch('service/fetchService')
    return {services}
  }
}
</script>