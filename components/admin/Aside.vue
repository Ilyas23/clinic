<template>
  <div class="aside">
    <nuxt-link active-class="active" class="link" to="/admin/client"><i class="el-icon-edit"/>Запись пациентов</nuxt-link>
    <nuxt-link active-class="active" class="link" to="/admin/schedule"><i class="el-icon-date"/>График</nuxt-link>
    <nuxt-link active-class="active" class="link" to="/admin/service"><i class="el-icon-star-on"/>Услуги</nuxt-link>
    <nuxt-link active-class="active" class="link" to="/admin/news"><i class="el-icon-news"/>Новости</nuxt-link>
    <nuxt-link active-class="active" class="link" to="/admin/user"><i class="el-icon-circle-plus"/>Создать пользователя</nuxt-link>
    <nuxt-link active-class="active" class="link" to="/admin/logout"><i class="el-icon-error"/>Выйти</nuxt-link>
  </div>
</template>

<script>
import {Menu, MenuItem} from 'element-ui'
export default {
}
</script>

<style scoped>
  .aside{
    width: 20%;
    height: 100vh;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    position: relative;
    border-right: 1px solid #ddd;
  }

  .link{
    height: 50px;
    line-height: 3;
    color: #6e7277;
  }

  .link:hover{
    background-color: #f2f8ff;
  }

  .active{
    color: #409eff;
  }

  i{
    margin: 0 10px 0 15px;
  }
</style>
