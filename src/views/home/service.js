import Api from '@/api'

export default {
  async getList() {
    return await Api.get('/mock/75/getList')
  }
}
