import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    goodsNumber: 1,
    todos: [
      { id: 0, text: '听歌', done: false },
      { id: 1, text: '睡觉', done: false },
      { id: 2, text: '打羽毛球', done: false }
    ],
    infoList: [
      { id: 0, text: '听歌' },
      { id: 1, text: '睡觉' },
      { id: 2, text: '打羽毛球' },
      { id: 3, text: '打篮球' },
      { id: 4, text: '打太极' },
      { id: 5, text: '读书' },
      { id: 6, text: '吃火锅' }
    ],
    goodsInfo: [],
    goodsCartInfo: [],
    totalPrice: 0
  },
  getters,
  mutations,
  actions
})

export default store
