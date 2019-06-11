<template>
  <el-form
    ref="form"
    :model="form"
    :rules="rules"
    @submit.native.prevent="onSubmit"  
  >

    <h1 class="mb">Создать новую услугу</h1>

    <el-form-item label="Введите название услуги" prop="title">
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

    <el-upload
      ref="upload"
      class="mb"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-change="handleImageChange"
      :auto-upload="false"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">Перетащите картинку <em>или нажмите</em></div>
      <div class="el-upload__tip" slot="tip">файлы с расширением jpg/png</div>
    </el-upload>

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
        Создать услугу
      </el-button>

    </el-form-item>
  </el-form>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  data(){
    return {
      image: null,
      previewDialog: false,
      loading: false,
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
    handleImageChange(file, filelist){
      this.image = file.raw
    },
    onSubmit(){
      this.$refs.form.validate(async valid => {
        if(valid && this.image){
          try{
            this.loading = true
            const formData = {
              title: this.form.title,
              text: this.form.text,
              image: this.image
            }
            await this.$store.dispatch('service/create', formData)
            this.form.title = ''
            this.form.text = ''
            this.image = null
            this.$refs.upload.clearFiles()
            this.$message.success('Услуга создана')
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
 }
</style>