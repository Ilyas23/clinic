<template>
  <div class="service">
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
  .service{
    padding-top: 4rem;
  }

  .container{
    flex-direction: row-reverse;
    width: 90%;
    margin: 0 auto;
  }

  @media only screen and (max-width: 1024px) {
    .container{
      flex-direction: column;
      align-items: center;
      margin-top: 2rem;
    }
  }

  @media only screen and (max-width: 790px) {
    .service{
      padding-top: 1rem;
    }
  }
</style>
