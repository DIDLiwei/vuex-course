<template>
  <div id="app">
    <!-- mutation -->
    <button @click="decrementCount({amount:2})">-</button>
    <span>{{count}}</span>
    <button @click="incrementCount">+</button>
  </div>
</template>

<script>
import Count from "./components/Count";
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "app",
  components: {
    Count
  },
  computed: mapGetters([
    "count",
    "completedTodos",
    "completedTodosCount",
    "getTodosById"
  ]),
  // methods: {
  //   increment() {
  //     // 调用mutations里的incrementCount
  //     this.$store.commit("incrementCount");
  //   },
  //   decrement(n) {
  //     // 调用mutation里的decrementCount
  //     this.$store.commit("decrementCount", n);
  //   }
  // }
  methods: mapMutations(["incrementCount", "decrementCount"])
};
</script>

<style>
</style>
