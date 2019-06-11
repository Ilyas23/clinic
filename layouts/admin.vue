<template>
  <transition name="layout" mode="out-in">
    <div class="admin-layout">
      <el-container :style="{height: '100%'}">
        <el-header :style="{padding: '0'}">
          <app-navigation/>
        </el-header>
        <el-container>
          <el-aside width="266px">
            <app-aside />
          </el-aside>
          <el-main>
            <nuxt/>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </transition>
</template>

<script>
import AppNavigation from '@/components/main/Navigation'
import AppAside from '@/components/admin/Aside'
export default {
  components: {
    AppAside,
    AppNavigation
  },
  computed: {
    error(){
      return this.$store.getters.error
    }
  },
  watch: {
    error(value){
      this.$message.error(value.response.data.message)
    }
  }
}
</script>

<style scoped>
  .admin-layout{
    width: 100%;
    height: 100vh;
  }
</style>

