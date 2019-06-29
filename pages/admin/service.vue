<template>
  <div class="service">
    <h1>Список услуг</h1>
    <el-table
      highlight-current-row
      :border="true"
      :data="service"
      style="margin: 0 auto; width: 70%;"
    >
      <el-table-column
        prop="title"
        label="Название услуги"
      />
      <el-table-column
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
    <div class="button">
      <el-button
        style="margin: 2rem auto;"
        type="primary" v-text="'Добавить услугу'"
        @click="addRow"
      />
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: `Услуги | ${process.env.appName}`
  },
  layout: 'admin',
  middleware: ['admin-auth'],
  async asyncData({store}){
    const service = await store.dispatch('service/fetchService')
    return {service}
  },
  methods: {
    addRow(){
      this.$router.push('/admin/add-service')
    },
    open(id){
      this.$router.push(`/admin/edit-service/${id}`)
    },
    async remove(id){
      try {
        await this.$confirm('Удалить услугу?', 'Внимание!', {
          confirmButtonText: 'Да',
          cancelButtonText: 'Отменить',
          type: 'warning'
        })
        await this.$store.dispatch('service/remove', id)
        this.service = this.service.filter(s => s._id !== id)
        this.$message.success('Услуга удалена')
      } catch (e) {

      }
    }
  }
}
</script>

<style scoped>
  .service{
    width: 80%;
    height: auto;
  }

  h1{
    margin: 4rem 0 2rem;
    text-align: center;
  }

  .button{
    display: flex;
    justify-content: center;
  }
</style>
