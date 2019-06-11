export const actions = {
  async fetchSchedule({commit}){
    try {
      return await this.$axios.$get('api/schedule/admin')
    } catch(e){
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchClientSchedule({commit}){
    try {
      return await this.$axios.$get('api/schedule')
    } catch(e){
      commit('setError', e, {root: true})
      throw e
    }
  },
  async remove({commit}, id){
    try{
      return await this.$axios.$delete(`/api/schedule/admin/${id}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchScheduleById({commit}, id){
    try {
      return await this.$axios.$get(`api/schedule/admin/${id}`)
    } catch(e){
      commit('setError', e, {root: true})
      throw e
    }
  },
  async update({commit}, row){
    try{
      return await this.$axios.$put(`/api/schedule/admin/${row._id}`, {row})
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async addRow({commit}, row){
    try{
      return await this.$axios.$post('/api/schedule/admin', row)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  }
}