export const actions = {
  async create({commit}, {title, text, image}){
    try {
      const fd = new FormData()
      fd.append('title', title)
      fd.append('text', text)
      fd.append('image', image, image.name)
      return await this.$axios.$post('api/news/admin', fd)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchNews({commit}){
    try {
      return await this.$axios.$get('api/news')
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchNewsById({commit}, id){
    try {
      return await this.$axios.$get(`api/news/${id}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async remove({commit}, id){
    try{
      return await this.$axios.$delete(`/api/news/admin/${id}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async update({commit}, form){
    try{
      return await this.$axios.$put(`/api/news/admin/${form._id}`, {form})
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  }
}