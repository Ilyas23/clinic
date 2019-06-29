<template>
  <div class="table-admin">
    <el-table
      :border="true"
      :data="[row]"
      style="width: 100%; margin: 2rem 0;"
    >
      <el-table-column
        prop="doctor"
        label="Профиль"
        width="180"
      >
        <el-input v-model="row.doctor"/>
      </el-table-column>
      <el-table-column
        prop="name"
        label="ФИО"
        width="180"
      >
        <el-input v-model="row.name"/>
      </el-table-column>
      <el-table-column
        prop="time[0]"
        label="ПН"
        width="130px"
      >
        <el-input v-model="row.time[0]"/>
      </el-table-column>
      <el-table-column
        prop="time[1]"
        label="ВТ"
        width="130px"
      >
        <el-input v-model="row.time[1]"/>
      </el-table-column>
      <el-table-column
        prop="time[2]"
        label="СР"
        width="130px"
      >
        <el-input v-model="row.time[2]"/>
      </el-table-column>
      <el-table-column
        prop="time[3]"
        label="ЧТ"
        width="130px"
      >
        <el-input v-model="row.time[3]"/>
      </el-table-column>
      <el-table-column
        prop="time[4]"
        label="ПТ"
        width="130px"
      >
        <el-input v-model="row.time[4]"/>
      </el-table-column>
      <el-table-column
        prop="time[5]"
        label="СБ"
        width="130px"
      >
        <el-input v-model="row.time[5]"/>
      </el-table-column>
      <el-table-column
        prop="time[6]"
        label="ВС"
        width="130px"
      >
        <el-input v-model="row.time[6]"/>
      </el-table-column>
    </el-table>
    <el-button
      @click="addRow"
      type="success"
      :loading="loading"
      style="margin-left: 1rem;"
    >Добавить</el-button>
  </div>
</template>

<script>
export default {
  head: {
    title: `Добавить врача | ${process.env.appName}`
  },
  layout: 'admin',
  middleware: ['admin-auth'],
  data(){
    return{
      loading: false,
      row: {
        doctor: '',
        name: '',
        time: []
      }
    }
  },
  methods: {
    async addRow(){
      try {
        this.loading = true
        await this.$store.dispatch('schedule/addRow', this.row)
        this.row.doctor = ''
        this.row.name = ''
        this.row.time = []
        this.$message.success('Строка добавлена')
        this.loading = false
      } catch (e) {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
  .table-admin{
    width: 80%;
    margin-top: 1rem;
  }
</style>
