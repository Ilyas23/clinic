<template>
  <el-card
    class="card"
  >
    <h1 style="text-align: center; font-size: 25px;">Создать пользователя</h1>
    <el-form
      :rules="rules"
      @submit.native.prevent="onSubmit"
      ref="form"
      :model="form"
      label-width="80px"
    >
      <el-form-item style="margin-top: 2rem;" prop="login" label="Логин">
        <el-input style="width: 250px;" v-model="form.login"/>
      </el-form-item>
      <el-form-item prop="password" label="Пароль">
        <el-input style="width: 250px;" type="password" v-model="form.password"/>
      </el-form-item>
      
      <el-form-item>
        <el-button
          type="primary"
          :loading="loading"
          native-type="submit"
        >Создать</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  head() {
    return {
      title: `Создать пользователя | ${process.env.appName}`
    }
  },
  layout: 'admin',
  middleware: ['admin-auth'],
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
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          try {
            this.loading = true
            await this.$store.dispatch('auth/createUser', this.form)
            this.$message.success('Пользователь создан')
            this.form.login = ''
            this.form.password = ''
            this.loading = false
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
  .card{
    width: 400px;
    height: 300px;
    margin: 7rem auto 0;
  }
</style>
