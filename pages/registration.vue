<template>
  <div class="container">
    <h1 class="color" style="text-align: center; margin-bottom: 2rem;">Записаться на прием</h1>
    <el-form
      :rules="rules"
      @submit.native.prevent="onSubmit"
      class="form"
      ref="form"
      :model="form"
      label-width="210px"
    >

      <el-form-item prop="name" label="ФИО">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item prop="phone" label="Телефон">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>

      <el-form-item label="E-mail">
        <el-input v-model="form.email"></el-input>
      </el-form-item>

      <el-form-item label="Желательное время записи">
        <el-date-picker
          type="date"
          placeholder="Дата"
          v-model="form.date"
          style="width: 140px;"
        ></el-date-picker>

        <el-time-picker
          format="HH:mm"
          type="fixed-time"
          placeholder="Время"
          v-model="form.time"
          style="width: 100px;"
        ></el-time-picker>
      </el-form-item>

      <el-form-item label="Комментарий">
        <el-input
          type="textarea"
          v-model="form.comment"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          :loading="loading"
          native-type="submit"
        >Записаться на прием </el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      form: {
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        comment: ''
      },
      rules: {
        name: [
          { required: true, message: 'Имя не должно быть пустым', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: 'Введите номер телефона', trigger: 'blur' }
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
            await this.$store.dispatch('patient/create', this.form)
            this.form.name = ''
            this.form.phone = ''
            this.form.email = ''
            this.form.date = ''
            this.form.time = ''
            this.form.comment = ''
            this.$message.success('Вы успешно записались на прием!')
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
  .container{
    padding-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .form{
    width: 50%;
    margin-right: 198px;
  }

  @media only screen and (max-width: 1024px) {
    .form{
      width: 60%;
    }
  }

  @media only screen and (max-width: 790px) {
    .container{
      padding-top: 1rem;;
    }
  }
</style>
