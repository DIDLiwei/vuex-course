<template>
  <div id="app">
    <!-- mutation -->
    <button @click="decrementCountAsync({amount:2})">-</button>
    <span>{{count}}</span>
    <button @click="incrementCountAsync">+</button>
    <hr />
    <p>{{completedTodos}}</p>
    <button @click="fetchDataAsync">FetchData</button>
  </div>
</template>

<script>
import Count from "./components/Count";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
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
  //   incrementCount() {
  //     // 触发ations
  //     this.$store.dispatch("incrementCountAsync");
  //   },
  //   decrementCount(n) {
  //     // 触发actions
  //     this.$store.dispatch("decrementCountAsync", n);
  //   },
  //   fetchData() {
  //     this.$store.dispatch("fetchDataAsync");
  //   }
  // }
  methods: mapActions([
    "incrementCountAsync",
    "decrementCountAsync",
    "fetchDataAsync"
  ])
  // methods: mapMutations(["incrementCount", "decrementCount"])
};
</script>

<style>
</style>
