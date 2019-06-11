<template>
  <div class="login">
    <el-card
      :style="{width: '400px'}"
    >
      <h1 style="text-align: center;">Создать пользователя</h1>
      <el-form
        :rules="rules"
        @submit.native.prevent="onSubmit"
        ref="form"
        :model="form"
        label-width="80px"
      >
        <el-form-item style="margin-top: 2rem;" prop="login" label="Логин">
          <el-input v-model="form.login"/>
        </el-form-item>
        <el-form-item prop="password" label="Пароль">
          <el-input type="password" v-model="form.password"/>
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
  </div>
</template>

<script>
export default {
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
  .login{
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 4rem;
  }
</style>
