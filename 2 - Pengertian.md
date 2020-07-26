### Vuex

> vuex merupakan sebuah **state management pattern** pada vuejs yg mana tugasnya sebagai **centralized store** untuk semua component dalam aplikasi vuejs yg akan kita buat.

### Kapan kita harus menggunakan Vuex ?

> Vuex digunakan **ketika aplikasi kita semakin besar** dimana jika data datanya sudah semakin banyak dan makin susah untuk di kelola maka menggunakan vuex adalah hal pilihan yg tepat, namun jika aplikasi yg kita buat masih cukup sederhana dan data datanya masih bisa di handle dengan menggunakan **props dan emit** maka itu sudah cukup.

### Istilah yang ada dalam Vuex

|Istilah Vuex    |Pengertian                     |
|----------------|-------------------------------|
|state           |tempat *penyimpanan sumber* semua data di dalam vuex           |
|getters         |fungsinya sama seperti computed(), untuk melakukan penyaringan/manipulasi/pengurutan data pada state.            |
|mutations       |untuk mengubah state, satu-satunya cara untuk mengubah state harus melalui mutations, tidak perduli dengan bisnis logic, bersifat sync & tidak dapat melakukan async|
|actions         |digunakan sebagai *bisnis logic*, seperti melakukan *fetch data api*, dapat melakukan *async method*, setelah melakukan suatu method biasanya *dilanjutkan dengan melakukan mutations*        |
|modules         |module memungkinkan kita untuk *memecah bagian dari aplikasi kita* agar dapat di-handle dengan mudah, sebab apabila digabungkan dalam satu file akan membentuk kumpulan code yang cukup besar dan menyulitkan kita untuk mencari bagian bagian yang akan dimodifikasi kemudian hari.|

> **info:** masih banyak istilah lain yang belum disebutkan, tabel diatas akan diupdate.
