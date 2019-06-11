export const actions = {
  async create({commit}, form){
    try {
      return await this.$axios.$post('api/patient', form)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchPatient({commit}){
    try {
      return await this.$axios.$get('api/patient/admin')
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchPatientById({commit}, id){
    try {
      return await this.$axios.$get(`api/patient/admin/${id}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async remove({commit}, id){
    try{
      return await this.$axios.$delete(`/api/patient/admin/${id}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async update({commit}, form){
    try{
      return await this.$axios.$put(`/api/patient/admin/${form._id}`, {form})
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  }
}