## State 
State adalah data di dalam vuex. Untuk mengambil data di dalam state, kita bisa mengambilnya secara langsung atau melalui getters.

1. Mengambil data state secara langsung
template = 
```<p> Count = {{ this.$store.state.count }}</p>```

2. Mengambil data state melalui getters
  ```js
  template = <p> Count = {{ getCount }} </p>
  
  computed: {
    getCount() {
      return this.$store.getters.getCount;
    },
  }
  
  atau sama dengan : 
  
  import { mapGetters } from "vuex";
  
  computed: {
    ...mapGetters([
      "getCount"
    ]),
    atau untuk mengambil getter di dalam modules user : 
    ...mapGetters({
      getCount : "user/getCount"
    })
  }
 
  ```
  > **Note:** mengakses getters, harus dilakukan didalam computed properties.
  
