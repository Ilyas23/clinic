<template>
  <h1>Очищаем данные</h1>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  beforeCreate(){
    this.$store.dispatch('auth/logout')
    this.$router.push('/')
    this.$router.push('/login?message=logout')
  }
}
</script>