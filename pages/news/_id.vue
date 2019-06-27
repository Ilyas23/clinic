<template>
  <div class="news">
    <div class="container">
      <h1 class="mb">{{news.title}}</h1>
      <img class="mb" :src="news.imageUrl" alt="">
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
    padding-top: 4rem;
  }
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img{
    width: 75%;
  }

  @media only screen and (max-width: 790px) {
    .news{
      padding-top: 1rem;
    }
    img{
      width: 90%;
    }
  }

  @media only screen and (max-width: 650px) {
    img{
      width: 100%;
    }
  }
</style>
