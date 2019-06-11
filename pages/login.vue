<template>
  <div class="login">
    <el-card
      :style="{width: '400px'}"
    >
      <el-form
        :rules="rules"
        @submit.native.prevent="onSubmit"
        class="form"
        ref="form"
        :model="form"
        label-width="80px"
      >
        <el-form-item style="margin-top: 2rem;" prop="login" label="Логин">
          <el-input v-model="form.login"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="Пароль">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        
        <el-form-item>
          <el-button
            type="primary"
            :loading="loading"
            native-type="submit"
          >Войти</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      form: {
        login: '',
        password: ''
      },
      rules: {
        login: [
          { required: true, message: 'Введите логин', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Введите пароль', trigger: 'blur' }
        ]
      }
    }
  },
  mounted(){
    const {message} = this.$route.query

    switch(message) {
      case 'login':
        this.$message.info('Для начала войдите в систему')
        break
      case 'logout':
        this.$message.success('Вы успешно вышли из системы')
        break
      case 'session':
        this.$message.warning('Время сессии истекло, пожалуйста зайдите заново')
        break
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true
          try {
            await this.$store.dispatch('auth/login', this.form)
            this.$router.push('/admin')
          } catch (e) {
            this.loading = false
          }
        }
      })
    }
  }
}
</script>

<style scoped>
  .login{
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 4rem;
  }
</style>