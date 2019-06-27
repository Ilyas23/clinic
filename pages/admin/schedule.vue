<template>
  <div class="schedule">
    <h1>Расписание врачей</h1>
    <el-table
      highlight-current-row
      :border="true"
      :data="schedule"
      style="width: 100%"
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
        width="100px"
      />
      <el-table-column
        prop="time[1]"
        label="ВТ"
        width="100px"
      />
      <el-table-column
        prop="time[2]"
        label="СР"
        width="100px"
      />
      <el-table-column
        prop="time[3]"
        label="ЧТ"
        width="100px"
      />
      <el-table-column
        prop="time[4]"
        label="ПТ"
        width="100px"
      />
      <el-table-column
        prop="time[5]"
        label="СБ"
        width="100px"
      />
      <el-table-column
        prop="time[6]"
        label="ВС"
        width="100px"
      />
      <el-table-column
        fixed="right"
        label="Действия"
        width="120"
      >
        <template slot-scope="{row}">
          <el-tooltip
            effect="dark"
            content="Редактировать"
            placement="top"
          >
            <el-button
              @click="open(row._id)"
              type="primary"
              circle
              icon="el-icon-edit"
            />
          </el-tooltip>
          <el-tooltip
            effect="dark"
            content="Удалить"
            placement="top"
          >
            <el-button
              @click="remove(row._id)"
              icon="el-icon-delete"
              type="danger"
              circle
            />
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <el-button
      style="margin: 1rem;"
      type="primary" v-text="'Добавить врача'"
      @click="addRow"
    />
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  async asyncData({store}){
    const schedule = await store.dispatch('schedule/fetchSchedule')
    return {schedule}
  },
  methods: {
    addRow(){
      this.$router.push('/admin/add-row')
    },
    open(id){
      this.$router.push(`/admin/edit-schedule/${id}`)
    },
    async remove(id){
      try {
        await this.$confirm('Удалить строку?', 'Внимание!', {
          confirmButtonText: 'Да',
          cancelButtonText: 'Отменить',
          type: 'warning'
        })
        await this.$store.dispatch('schedule/remove', id)
        this.schedule = this.schedule.filter(s => s._id !== id)
        this.$message.success('Строка удалена')
      } catch (e) {

      }
    }
  }
}
</script>

<style scoped>
  .schedule{
    width: 80%;
  }
  h1{
    text-align: center;
    margin: 4rem 0 1rem;
  }
</style>
