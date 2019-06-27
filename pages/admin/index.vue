<template>
  <h1>Добро пожаловать в админ-панель!</h1>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth']
}
</script>
<style scoped>
  h1{
    margin: 10rem;
  }
</style>

