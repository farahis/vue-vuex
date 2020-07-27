Penjelasan: 
1.  Jika tidak menggunakan  namespaced: true, maka file yang ada di dalam modules, dianggap seperti berada didalam index.
2.  Jika tanpa namespace, penamaan state yang ada di dalam module sama dengan yang ada di dalam index.js. 
    maka yang dibaca secara independet, namun dalam mutations dapat mempengaruhi semua state yang memiliki nama state yg sama
3.  direkomendasikan menggunakan namespaced.

//==== File store.index.js ====//

import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 5,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {},
  modules: {
    user,
  },
  getters: {},
});

//===== File modules.user.js ====//

const user = {
  namespaced: true,
  state: {
    counts: 3,
  },
  mutations: {
    increment(state) {
      state.counts++;
    },
  },
  actions: {},
  getters: {},
};

export default user;

//===== template ====//

<p>User Count {{this.$store.state.user.count}}</p>
<p>Index Count {{this.$store.state.count}}</p>

<button @click="addcountuser()">Add Count User</button>
<button @click="addcount()">Add Count</button>
<button @click="user()">Increment</button>

addcountuser() {
  this.$store.commit("user/increment");
},

addcount() {
  this.$store.commit("increment");
},

// Map Mutations ke Index.js
<button @click="inc()">Increment</button>
...mapMutations([
  "inc", // map `this.add()` shorthand `this.$store.commit('increment')`
]),

// Mutations Ke Modules user.increment
<button @click="inc()">Increment</button>
inc() {
  this.$store.commit("user/increment");
},

// Map Mutations Ke Modules user.increment
<button @click="inc()">Increment</button>
...mapMutations({
  inc: "user/increment", // `user()` shorthand `this.$store.commit('user/increment')`
}),



