import Vue from 'vue'
import Vuex from 'vuex'
import Todo from '../models/Todo'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 動作確認用に初期値として３つのTodoを配列に格納する
    todos: [
      new Todo('タスク１'),
      new Todo('タスク２'),
      new Todo('タスク３')
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
