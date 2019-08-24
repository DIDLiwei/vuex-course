import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 属性
        count: 0,
        todos: [{
                id: 1,
                title: "todo item 1",
                completed: false
            },
            {
                id: 2,
                title: "todo item 2",
                completed: true
            },
            {
                id: 3,
                title: "todo item 3",
                completed: true
            }
        ]
    },
    getters: {
        count: state => state.count,
        // count(state) {
        //     return ++state.count
        // }
        completedTodos: state => state.todos.filter(todo => todo.completed),
        // completedTodos: function (state) {
        //     return state.todos.filter(function (todo) {
        //         return todo.completed
        //     })
        // }
        completedTodosCount: (state, getters) => getters.completedTodos.length,
        // completedTodosCount: function(state, getters) {
        //     return getters.completedTodos.length;
        // },
        getTodosById: state => id => state.todos.find(todo => todo.id == id)
    },
    mutations: {
        incrementCount: state => state.count++,
        decrementCount: (state, payload) => state.count -= payload.amount,
        setTodos: (state, todos) => state.todos = todos
    },
    actions: {
        incrementCountAsync: ({ commit }) => {
            setTimeout(() => {
                // 解构
                // const object = {
                //     name: "李伟",
                //     age:32
                // }
                // const {name,age} = object
                // context /** = this.$store */ 
                commit("incrementCount")
            }, 2000)
        },
        decrementCountAsync: (context, payload) => {
            setTimeout(() => {
                context /** = this.$store */ .commit("decrementCount", payload)
            }, 1000)
        },
        async fetchDataAsync(context) {
            const response = await Axios.get("http://jsonplaceholder.typicode.com/todos");
            // console.log(response)
            context.commit("setTodos", response.data)
        }
    }
})