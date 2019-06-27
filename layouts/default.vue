<template>
  <transition name="layout" mode="out-in">
    <div>
      <app-navigation />
      <nuxt />
    </div>
  </transition>
</template>

<script>
import AppNavigation from '@/components/main/Navigation'
export default {
  components: {
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