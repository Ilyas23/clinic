<template>
  <div class="news">
    <h1 class="mb">Новости</h1>
    <el-table
      highlight-current-row
      :border="true"
      :data="news"
      style="width: 50%; margin: 0 auto;"
    >
      <el-table-column
        prop="title"
        label="Заголовок"
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
    <el-button
      style="margin-top: 2rem;"
      type="primary" v-text="'Добавить новость'"
      @click="addRow"
    />
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  async asyncData({store}){
    const news = await store.dispatch('news/fetchNews')
    return {news}
  },
  methods: {
    addRow(){
      this.$router.push('/admin/add-news')
    },
    open(id){
      this.$router.push(`/admin/edit-news/${id}`)
    },
    async remove(id){
      try {
        await this.$confirm('Удалить новость?', 'Внимание!', {
          confirmButtonText: 'Да',
          cancelButtonText: 'Отменить',
          type: 'warning'
        })
        await this.$store.dispatch('news/remove', id)
        this.news = this.news.filter(s => s._id !== id)
        this.$message.success('Новость удалена')
      } catch (e) {

      }
    }
  }
}
</script>

<style scoped>
  .news{
    width: 80%;
    margin-top: 5rem;
    text-align: center;
  }
</style>
