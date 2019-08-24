<template>
  <div id="app">
    <p>App.vue:{{count}}</p>
    <p>App.vue:{{todos}}</p>
    <Count />
  </div>
</template>

<script>
import Count from "./components/Count";
import { mapState } from "vuex";
export default {
  name: "app",
  components: {
    Count
  },
  computed: mapState(["count", "todos"])
  // 写法二
  // computed: mapState({
  // count: state => state.count,
  // count:function(state){
  //   return state.count
  // },
  // todos: state => state.todos
  // })
  // 写法一
  // count() {
  //   return this.$store.state.count;
  // },
  // todos() {
  //   return this.$store.state.todos;
  // }
};
</script>

<style>
</style>
