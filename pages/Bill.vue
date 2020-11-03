<template>
  <div>
    <v-form ref="form">
      <v-text-field
        v-model="refNO"
        label="REF Number"
        outlined
        :counter="13"
      ></v-text-field>
    </v-form>
    <v-btn @onclick="search()">ตรวจสอบ</v-btn>
    <v-card class="mx-auto" max-width="344" @v-on:click="search() == true">
      <v-card-text id="detail">
        {{ price }}
        {{ genre }}
      </v-card-text>
      <v-card-actions>
        <v-btn text color="deep-purple accent-4" @click="cart(), reset()"
          >ADD TO CART</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { db } from '~/plugins/Fb.js'
export default {
  data() {
    return {
      refNO: '',
      price: this.price,
      genre: '',
    }
  },
  methods: {
    reset() {
      this.$refs.form.reset()
    },
    cart() {
      const data = {
        number: this.refNO,
        price: this.price,
        genre: this.select,
      }
      this.$store.commit('set_cart', data)
      alert('ใส่ตะกร้าเรียบร้อย')
    },
    search() {
      db.collection('Bill')
        .where('refNO', '==', this.refNO)
        .onSnapshot(function (querySnapshot) {
          const price1 = []
          const select1 = []
          querySnapshot.forEach(function (doc) {
            price1.push(doc.data().price)
            select1.push(doc.data().select)
          })
          console.log(select1)
          console.log(price1)
          this.genre = db.collection('Bill').doc.select1[0]
          this.price = db.collection('Bill').doc.price1[0]
        })
    },
  },
}
</script>
