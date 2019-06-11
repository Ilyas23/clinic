<template>
  <el-row
    type="flex"
    justify="center"
  >
    <el-col
      class="flex-col"
      :md="24"
    >
      <div @click="goToMain" class="logo">
        <div class="words">
          <span>Dossakhanov's</span>
          <span>Team</span>
        </div>
        <img src="../../static/1.jpg" alt="">
      </div>
      <el-menu
        mode="horizontal"
        router
        :default-active="$route.path"
        class="el-menu"
      >
        <el-menu-item class="item" index="/registration">Записаться на прием</el-menu-item>
        <el-menu-item class="item" index="/schedule">Расписание врачей</el-menu-item>
        <el-menu-item class="item" index="/service">Услуги</el-menu-item>
        <el-menu-item class="item" index="/news">Новости</el-menu-item>
        <el-menu-item class="item" index="5">Контакты</el-menu-item>
        <el-menu-item class="item" index="/login">Войти</el-menu-item>
      </el-menu>
    </el-col>
  </el-row> 
</template>

<script>
  export default {
    methods: {
      goToMain(){
        this.$router.push('/')
      }
    }
  };
</script>

<style scoped>

  .logo{
    position: relative;
  }

  img{
    transform: scale(-1, 1);
    margin-top: 20px;
    height: auto;
    width: 200px;
  }

  .words{
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    position: absolute;
    z-index: 100;
  }

  .flex-col{
    display: flex;
    justify-content: center;
  }

  .el-menu{
   width: fit-content;
   font-weight: bold;
  }

  @media only screen and (max-width: 944px) {
  }

</style>
