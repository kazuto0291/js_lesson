<template>
  <div id="app">
    <h1>App.Todo</h1>
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
      >{{ todo.title }} ({{ todo.completed ? '完了' : '未完了' }})
      </li>
      <li
        v-for="todo in todos"
        :key="todo.id"
      >{{ todo.title }} ({{ todo.completed ? '完了' : '未完了' }})
      </li>
    </ul>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    // todos() {
    //   return this.$store.state.todos;
    // },
    ...mapState([
      'todos'
    ])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
