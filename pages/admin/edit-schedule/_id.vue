<template>
  <div class="edit">
    <el-table
      :border="true"
      :data="[row]"
      style="width: 100%;"
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
      @click="save"
      type="success"
      :loading="loading"
      style="margin: 1rem;"
    >Сохранить</el-button>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  async asyncData({store, params}){
    const schedule = await store.dispatch('schedule/fetchScheduleById', params.id)
    return {schedule}
  },
  data(){
    return {
      loading: false,
      row: {
        doctor: '',
        name: '',
        time: []
      }
    }
  },
  mounted(){
    this.row = {...this.schedule}
  },
  methods: {
    async save(){
      try {
        this.loading = true
        await this.$store.dispatch('schedule/update', this.row)
        this.$message.success('Строка обновлена')
        this.loading = false
      } catch (e) {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
  .edit{
    width: 80%;
    margin-top: 5rem;
  }
</style>
