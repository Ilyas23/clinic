<template>
  <el-form
    ref="form"
    :model="form"
    :rules="rules"
    @submit.native.prevent="save"
    style="width: 50%;"
  >

    <h1 class="mb">Редактирование записи приема пациента</h1>

    <el-form-item label="ФИО пациента" prop="name">
      <el-input
        v-model="form.name"
      />
    </el-form-item>

    <el-form-item label="Телефон" prop="phone">
      <el-input
        v-model="form.phone"
      />
    </el-form-item>

    <el-form-item label="E-mail" prop="email">
      <el-input
        v-model="form.email"
      />
    </el-form-item>

    <el-form-item label="Время записи">
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

    <el-form-item class="mb2" label="Комментарий" prop="comment">
      <el-input
        type="textarea"
        v-model="form.comment"
        resize="none"
        :rows="3"
      />
    </el-form-item>

    <el-form-item>
      <el-button
        type="primary"
        native-type="submit"
        round
        :loading="loading"
      >
        Сохранить
      </el-button>

    </el-form-item>
  </el-form>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  async asyncData({store, params}){
    const patient = await store.dispatch('patient/fetchPatientById', params.id)
    return {patient}
  },
  data(){
    return {
      loading: false,
      form: {
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        comment: '',
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
  mounted(){
    this.form = {...this.patient}
  },
  methods: {
    save(){
      this.$refs.form.validate(async valid => {
        if(valid){
          try {
            this.loading = true
            await this.$store.dispatch('patient/update', this.form)
            this.$message.success('Запись обновлена')
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
