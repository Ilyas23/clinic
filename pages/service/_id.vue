<template>
  <div>
    <el-breadcrumb style="margin-left: 4.3rem;" class="mb" separator="/">
      <el-breadcrumb-item to="/">Главная</el-breadcrumb-item>
      <el-breadcrumb-item to="/service">Услуги</el-breadcrumb-item>
      <el-breadcrumb-item>{{service.title}}</el-breadcrumb-item>
    </el-breadcrumb>
    <h1 style="margin-left: 4.3rem;">{{service.title}}</h1>
    <el-container class="container">
      <el-aside width="400px">
        <img style="width: 100%;" :src="service.imageUrl" alt="">
      </el-aside>
      <el-main>
        <vue-markdown class="mb">{{service.text}}</vue-markdown>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  async asyncData({store, params}){
    const service = await store.dispatch('service/fetchServiceById', params.id)
    return {service}
  }
}
</script>


<style scoped>
  .container{
    direction: flex;
    flex-direction: row-reverse;
    width: 90%;
    margin: 0 auto;
  }
</style>
