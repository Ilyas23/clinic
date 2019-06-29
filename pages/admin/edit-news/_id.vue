<template>
  <el-form
    ref="form"
    :model="form"
    :rules="rules"
    @submit.native.prevent="onSubmit"
  >

    <h1 class="mb">Редактировать новость</h1>

    <el-form-item label="Введите заголовок" prop="title">
      <el-input
        v-model="form.title"
      />
    </el-form-item>

    <el-form-item class="mb2" label="Текст в формате .md или .html" prop="text">
      <el-input
        type="textarea"
        v-model="form.text"
        resize="none"
        :rows="10"
      />
    </el-form-item>

    <el-button class="mb" type="success" plain @click="previewDialog = true">
      Предпросмотр
    </el-button>

    <el-dialog title="Предпросмотр" :visible.sync="previewDialog">
      <div :key="form.text">
        <vue-markdown>{{form.text}}</vue-markdown>
      </div>
    </el-dialog>

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
  head() {
    return {
      title: `Редактировать новость | ${process.env.appName}`
    }
  },
  layout: 'admin',
  middleware: ['admin-auth'],
  async asyncData({store, params}){
    const news = await store.dispatch('news/fetchNewsById', params.id)
    return {news}
  },
  mounted(){
    this.form = {...this.news}
  },
  data(){
    return {
      previewDialog: false,
      form: {
        title: '',
        text: ''
      },
      rules: {
        text: [
          { required: true, message: 'Текст не должен быть пустым', trigger: 'blur' }
        ],
        title: [
          { required: true, message: 'Заголовок не может быть пустым', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit(){
      this.$refs.form.validate(async valid => {
        if(valid){
          try{
            this.loading = true
            await this.$store.dispatch('news/update', this.form)
            this.form.title = ''
            this.form.text = ''
            this.$message.success('Новость сохранена')
          }catch(e){} finally{
            this.loading = false
          }
          
        } else {
          this.$message.warning('Форма не валидна')
        }
      })
    }
  }
}
</script>

<style scoped>
  form{
    width: 600px;
    margin: 5rem auto 0;
  }
</style>