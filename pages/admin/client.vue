<template>
  <div>
    <h1 style="text-align: center; margin-bottom: 1rem;">Список приемов</h1>
    <el-table
      :data="patient"
      style="width: 95%"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <p
            style="margin-left: 68px;" 
            class="mb"
          > ФИО:&emsp;<b>{{props.row.name}}</b>
          </p>
          <p 
            style="margin-left: 41px;" 
            class="mb"
          > Телефон:&emsp;<b>{{props.row.phone}}</b>
          </p>
          <p 
            style="margin-left: 57px;" 
            class="mb"
           >E-mail:&emsp;<b>{{props.row.email}}</b>
          </p>
          <p 
            style="margin-left: 34px;" 
            class="mb"
          > На время:&emsp;<b>{{props.row.date}} - {{props.row.time}}</b>
          </p>
          <p>Комментарий:&emsp;<b>{{ props.row.comment }}</b></p>
        </template>
      </el-table-column>
      <el-table-column
        label="Дата"
        prop="date"
        width="150px"
      />
      <el-table-column
        label="Время"
        prop="time"
        width="150px"
      />
      <el-table-column
        label="ФИО"
        prop="name">
      </el-table-column>
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
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  async asyncData({store, $moment}){
    const patient = await store.dispatch('patient/fetchPatient')
    patient.map(item => {
      item.date = $moment(item.date).locale('ru').format('LL')
      item.time = $moment(item.time).locale('ru').format('LT')
    })
    console.log(patient[0].date)
    return {patient}
  },
  methods: {
    open(id){
      this.$router.push(`/admin/edit-client/${id}`)
    },
    async remove(id){
      try {
        await this.$confirm('Удалить запись пациента?', 'Внимание!', {
          confirmButtonText: 'Да',
          cancelButtonText: 'Отменить',
          type: 'warning'
        })
        await this.$store.dispatch('patient/remove', id)
        this.patient = this.patient.filter(s => s._id !== id)
        this.$message.success('Запись удалена')
      } catch (e) {

      }
    }
  }
}
</script>