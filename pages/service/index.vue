<template>
  <div>
    <el-breadcrumb style="margin-left: 8rem;" separator="/">
      <el-breadcrumb-item to="/">Главная</el-breadcrumb-item>
      <el-breadcrumb-item>Услуги</el-breadcrumb-item>
    </el-breadcrumb>
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