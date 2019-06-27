<template>
  <div style="padding-top: 4rem;">
    <h1 style="text-align: center; color: #2a7db0;">Новости</h1>
    <div class="card">
      <el-card
        class="card-item"
        v-for="news in news" :key="news._id"
        shadow="hover"
        :body-style="{padding: 0}"
      >
        <header slot="header">
          <h3>{{news.title}}</h3>
          <small>{{new Date().toLocaleString() }}</small>
        </header>
        <div class="post-body">
          <img
            :src="news.imageUrl"
            alt="" 
            class="post-img"
          >
        </div>
        <footer class="post-footer">
          <el-button style="margin: 1rem" round @click="openPost(news._id)">Открыть</el-button>
        </footer>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: Array
  },
  methods: {
    openPost(id){
      this.$router.push(`/news/${id}`)
    }
  }
}
</script>

<style scoped>
  .card{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .card-item{
    width: 40%;
    margin-top: 2rem;
    height: 100%;
  }

  .post-img{
    background-image: contain;
    width: 100%;
  }

  @media only screen and (max-width: 942px) {
    .card{
      width: 100%;
      flex-direction: column;
      align-items: center;
    }
    .card-item{
      width: 60%;
    }
  }

  @media only screen and (max-width: 700px) {
    .card-item{
      width: 80%;
    }
  }
</style>
