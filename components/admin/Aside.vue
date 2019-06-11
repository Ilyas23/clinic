<template>
  <el-menu
    router
    :default-active="$route.path"
    :style="{height: '100%'}"
  >
    <el-menu-item index="/admin/client">
      <i class="el-icon-edit"></i>
      <span>Запись пациентов</span>
    </el-menu-item>
    <el-menu-item index="/admin/schedule">
      <i class="el-icon-date"></i>
      <span>График</span>
    </el-menu-item>
    <el-menu-item index="/admin/service">
      <i class="el-icon-star-on"></i>
      <span>Услуги</span>
    </el-menu-item>
    <el-menu-item index="/admin/news">
      <i class="el-icon-news"></i>
      <span>Новости</span>
    </el-menu-item>
    <el-menu-item index="/admin/user">
      <i class="el-icon-circle-plus"></i>
      <span>Создать пользователя</span>
    </el-menu-item>
    <el-menu-item index="/admin/logout">
      <i class="el-icon-error"></i>
      <span>Выйти</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
}
</script>

