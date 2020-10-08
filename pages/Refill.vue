<template>
  <div>
    <v-card>
      <v-card-title>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="listdata"
        :items-per-page="5"
        :search="search"
        class="elevation-1"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'phone',
          align: 'start',
          sortable: false,
          value: 'phone',
        },
        {
          text: 'genre',
          value: 'genre',
        },
        {
          text: 'price',
          value: 'price',
        },
      ],
    }
  },
  computed: {
    listdata: {
      get() {
        return this.$nuxt.$store.state.list
      },
    },
  },
}
</script>
