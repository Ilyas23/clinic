<template>
  <div>
    <div class="navbar">
      <nuxt-link exact class="link" to="/">Главная</nuxt-link>
      <nuxt-link active-class="active" class="link" to="/registration">Записаться на прием</nuxt-link>
      <nuxt-link active-class="active" class="link" to="/schedule">Расписание врачей</nuxt-link>
      <nuxt-link active-class="active" class="link" to="/service">Услуги</nuxt-link>
      <nuxt-link active-class="active" class="link" to="/news">Новости</nuxt-link>
      <nuxt-link active-class="active" class="link" to="/contact">Контакты</nuxt-link>
      <nuxt-link active-class="active" class="link" to="/login">Войти</nuxt-link>
    </div>
    <button class="menu-button" @click="handleMenu">
      {{buttonText.toUpperCase()}}
    </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navbar: null,
        button: null,
        buttonText: '',
        toggle: true,
        width: 0
      }
    },
    mounted() {
      this.navbar = document.getElementsByClassName('navbar')[0].style
      this.button = document.getElementsByClassName('menu-button')[0].style
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    },
    methods: {
      handleResize() {
        this.width = window.innerWidth
        if(this.width > 790){
          this.navbar.flexDirection = 'row'
          this.navbar.position = 'fixed'
          this.navbar.display = 'flex'
          this.navbar.marginTop = '0'
          this.buttonText = 'раскрыть меню'
          this.toggle = true
        } else {
          this.navbar.flexDirection = 'column'
          this.navbar.position = 'inherit'
          this.navbar.display = 'none'
          // this.button.marginTop = '5rem'
          this.buttonText = 'раскрыть меню'
        }
      },
      handleMenu(){
        if(this.toggle){
          this.navbar.display = 'flex'
          this.navbar.flexDirection = 'column'
          this.navbar.position = 'inherit'
          this.navbar.height = 'auto'
          this.navbar.textAlign = 'center'
          this.buttonText = 'скрыть меню'
          this.toggle = false
        } else {
          this.navbar.display = 'none'
          this.buttonText = 'раскрыть меню'
          this.toggle = true
        }
      }
    }
  };
</script>

<style scoped>
  .navbar{
    width: 100%;
    height: 50px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 10;
    border-bottom: 1px solid #ddd;
  }

  .link{
    color: #6e7277;
    padding: 0 15px;
    line-height: 3;
  }

  .link:hover{
    border-bottom: 2px solid #bcd1f3;
    color: black;
  }

  .active{
    border-bottom: 2px solid #79acfd;
    color: black;
  }

  .menu-button{
    display: none;
  }

  @media only screen and (max-width: 860px) {
    .link{
      padding: 0 10px;
    }
  }

  @media only screen and (max-width: 790px) {
    .navbar{
      display: none;
    }

    .menu-button{
      width: 200px;
      height: 50px;
      display: block;
      margin: 1rem auto 0;
      border-radius: 25px;
      border: 2px solid #79acfd;
      background: #fff;
      font-family: 'Noto Serif';
      font-size: 15px;
      color: #0a4db89d;
      cursor: pointer;
    }
  }

</style>
