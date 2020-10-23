<template>
  <div>
    กรอก ref
    <input v-model="textSearch" type="text" />
    <button @click="search()">Search</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      textSearch: '',
      datas: null,
      loadData: [],
    }
  },
  methods: {
    search() {
      axios.get('https://store-d526c.firebaseio.com/').then((res) => {
        console.log(res)
      })
    },
  },
}
</script>

<style></style>
