import Vue from 'vue'
import Vuex from 'vuex'
import Todo from '../models/Todo'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 動作確認用に初期値として３つのTodoを配列に格納する
    todos: [
      new Todo('タスク1', true),
      new Todo('タスク2'),
      new Todo('タスク3', true),
      new Todo('タスク4'),
      new Todo('タスク5', true),
      new Todo('タスク6'),
      new Todo('タスク7', true),
    ]
  },
  getters: {
    completedTodos(state) {
      return state.todos.filter(todo => todo.completed);
    },
    completedTodosCount(state, getters) {
      return getters.completedTodos.length;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
