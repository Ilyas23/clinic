export const actions = {
  async create({commit}, {title, text, image}){
    try {
      const fd = new FormData()
      fd.append('title', title)
      fd.append('text', text)
      fd.append('image', image, image.name)
      return await this.$axios.$post('api/service/admin', fd)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchService({commit}){
    try {
      return await this.$axios.$get('api/service')
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchServiceById({commit}, id){
    try {
      return await this.$axios.$get(`api/service/${id}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async remove({commit}, id){
    try{
      return await this.$axios.$delete(`/api/service/admin/${id}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async update({commit}, form){
    try{
      return await this.$axios.$put(`/api/service/admin/${form._id}`, {form})
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  }
}