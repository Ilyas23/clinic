<template>
  <div>
    <h1 class="color" style="text-align: center; margin-bottom: 1rem;">Расписание врачей</h1>
    <el-table
      :border="true"
      :data="schedule"
      style="width: 100%;"
      
    >
    <el-table-column
      prop="doctor"
      label="Профиль"
      width="180"
    >
    </el-table-column>
    <el-table-column
      prop="name"
      label="ФИО"
      width="310"
    >
    </el-table-column>
    <el-table-column
      prop="time[0]"
      label="ПН"
    >
    </el-table-column>
    <el-table-column
      prop="time[1]"
      label="ВТ"
    >
    </el-table-column>
    <el-table-column
      prop="time[2]"
      label="СР"
    >
    </el-table-column>
    <el-table-column
      prop="time[3]"
      label="ЧТ"
    >
    </el-table-column>
    <el-table-column
      prop="time[4]"
      label="ПТ"
    >
    </el-table-column>
    <el-table-column
      prop="time[5]"
      label="СБ"
    >
    </el-table-column>
    <el-table-column
      prop="time[6]"
      label="ВС"
    >
    </el-table-column>
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