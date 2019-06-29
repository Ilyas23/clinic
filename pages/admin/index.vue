<template>
  <h1>Добро пожаловать в админ-панель!</h1>
</template>

<script>
export default {
  head: {
    title: `Админ панель | ${process.env.appName}`
  },
  layout: 'admin',
  middleware: ['admin-auth']
}
</script>
<style scoped>
  h1{
    margin: 10rem;
  }
</style>

