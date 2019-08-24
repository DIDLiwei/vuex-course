<template>
  <div id="count">
    <hr />
    <h1>Count.vue:{{count}}</h1>
    <p>{{todos}}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "count",
  components: {},
  computed: mapState(["count", "todos"])
  //   computed: mapState({
  //     count: state => state.count,
  //     todos: state => state.todos
  //   })
  //   写法一
  //   computed: {
  //     count() {
  //       return this.$store.state.count;
  //     },
  //     todos() {
  //       return this.$store.state.todos;
  //     }
  //   }
};
</script>

<style>
</style>
