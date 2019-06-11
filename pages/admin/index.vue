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
  /* div{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  } */
  h1{
    text-align: center;
    margin-top: 10rem;
  }
</style>

