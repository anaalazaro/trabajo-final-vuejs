import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    posts: [],
  },
  getters: {
    getUsers: (state) => state.users,
    getPosts: (state) => state.posts,
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        commit("setUsers", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    async fetchPost({ commit }, { id }) {
      try {
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/users/" + `${id}` + "/posts"
        );
        commit("setPosts", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  modules: {},
});
