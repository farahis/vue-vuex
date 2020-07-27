### Mutations dan Actions

Mutations bertugas untuk **mengkofirmasi setiap perubahan state** yang akan dilakukan, sedangkan *Actions* bertugas untuk **memberikan perintah terhadap apa yang akan dilakukan**. Misalnya saja, untuk melakukan perubahan data listposts, maka kita akan menyusun data yang akan di instruksikan ke Mutations agar melakukan perubahan pada state menggunakan **perintah commit**, meskipun kita dapat melakukan perubahan state secara langsung pada actions yang kita buat.

Contoh Kode :


```js
  state: {
    users: [],
  },
  
  actions: {
    async fetchUser({ commit }) {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      console.log(response.data);
      commit("SET_USERS", response.data);
    },
  },
  
  mutations: {
    increment(state) {
      state.count++;
    },
    
    SET_USERS(state, users) {
      state.users = users;
    },
  },
  

```

> Template Vue

```js
  <template>
    	<p v-for="user in getUsers" :key="user.id">{{ user.title }} </p>
  </template>
  
  <script>

  import { mapActions } from "vuex";

  export default {
    methods: {
      ...mapActions(
        { 
          fetchUser: "user/fetchUser" 
        }),
    },

    mounted() {
      this.fetchUser();
    },
  }

  </script>
  
```

> **ProTip:** Action juga biasa digunakan untuk melakukan Post Data dan mengirimkan data yang ingin di post melalui Action, seperti contoh berikut :

```js
  //Method pada Template 
  
  post() {
    this.$store.dispatch('postAction', this.formPost)
  }  
  
  //Action pada module vuex
  actions: {
    async postAction({ commit }, post) {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts/', post
      );
      commit("SET_POST", response.data);
      console.log("actions success");
    },
  },
  
  //Mutations pada module vuex
  mutations: {
    SET_USER(state, payload) {
      state.names = payload;
      console.log("mutations success");
    },
  },
  
  // Commit Mutations bisa langsung dilakukan di component, seperti contoh berikut 
  testcommit() {
    this.$store.commit("SET_NAME", "AKU GANTENG BRO!");
  },
  
  // Mutationsnya
  SET_NAME: (state, payload) => {
    state.names = payload;
    console.log("mutations success");
  },
```  






