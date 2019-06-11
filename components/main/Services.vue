<template>
  <div style="margin-top: 2rem;">
    <h1 style="text-align: center; color: #2a7db0;">Услуги</h1>
    <el-card class="wrap">
      <ol>
        <li v-for="service in services" :key="service._id">
          <nuxt-link class="link" :to="`/service/${service._id}`">{{service.title}}</nuxt-link>
        </li>
      </ol>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    services: Array
  }
}
</script>

<style scoped>
  .wrap{
    width: 50%;
    margin: 2rem auto 0;
  }

  .wrap ol {
    -moz-column-count: 2; /* Firefox */
    -webkit-column-count: 2; /* Safari and Chrome */
    column-count: 2;
    list-style-type: none;
    height: auto;
  }
  li{
    margin: 8px 15% 8px;
  }

  .link{
    color: black;
  }

  .link:hover{
    color: #ccc;
  }

  @media only screen and (max-width: 944px) {
    .wrap{
      width: 100%;
    }
  }
</style>
