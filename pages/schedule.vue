<template>
  <div class="schedule">
    <h1 class="color">Расписание врачей</h1>
    <el-table
      :border="true"
      :data="schedule"
      class="table"
    >
      <el-table-column
        prop="doctor"
        label="Профиль"
        width="180"
      />
      <el-table-column
        prop="name"
        label="ФИО"
        width="310"
      />
      <el-table-column
        prop="time[0]"
        label="ПН"
        width="100%"
      />
      <el-table-column
        prop="time[1]"
        label="ВТ"
        width="100%"
      />
      <el-table-column
        prop="time[2]"
        label="СР"
        width="100%"
      />
      <el-table-column
        prop="time[3]"
        label="ЧТ"
        width="100%"
      />
      <el-table-column
        prop="time[4]"
        label="ПТ"
        width="100%"
      />
      <el-table-column
        prop="time[5]"
        label="СБ"
        width="100%"
      />
      <el-table-column
        prop="time[6]"
        label="ВС"
        width="100%"
      />
    </el-table>
  </div>
  
</template>

<script>
export default {
  async asyncData({store}){
    const schedule = await store.dispatch('schedule/fetchClientSchedule')
    return {schedule}
  }
}
</script>

<style scoped>
  .schedule{
    padding-top: 4rem;
  }

  h1{
    text-align: center;
    margin-bottom: 2rem;
  }

  .table{
    width: 95%;
    margin: 0 auto;
  }

  @media only screen and (max-width: 1024px) {
    
  }
</style>
