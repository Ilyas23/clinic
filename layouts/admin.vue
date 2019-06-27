<template>
  <transition name="layout" mode="out-in">
    <div>
      <app-navigation/>
      <div class="admin-layout">
        <app-aside />
        <nuxt/>
      </div>
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
    display: flex;
  }
</style>

