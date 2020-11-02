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
    <v-btn @click="search()">ตรวจสอบ</v-btn>
    <v-card class="mx-auto" max-width="344">
      <v-card-text>
        <div>
          {{ price }}
          {{ genre }}
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="deep-purple accent-4" @click="cart(), reset()"
          >ADD TO CART</v-btn
        >
      </v-card-actions>
    </v-card>

    <!-- <v-card class="pa-6 ma-2" elevation="6">
      <v-card class="py-3 ma-1" elevation="10" color="blue"
        ><center><h1>please enter your data</h1></center></v-card
      >
      <br />
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-select
          v-model="select"
          :items="items"
          :rules="[(v) => !!v || 'Item is required']"
          label="- - - select service - - -"
          required
        ></v-select>

        <v-text-field
          v-model="refNO"
          :counter="13"
          label="REF number"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          v-model="PhoneNumber"
          label="Phone"
          required
        ></v-text-field>

        <v-btn
          :to="{ name: 'detail-id', params: { id: refNO } }"
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="set(), reset(), search()"
        >
          Submit
        </v-btn>

         <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

        <v-btn color="warning" @click="resetValidation">
          Reset Validation
        </v-btn>
      </v-form>
    </v-card>-->
  </div>
</template>

<script>
import { db } from '~/plugins/Fb.js'
export default {
  data() {
    return {
      refNO: '',
      price: '',
      genre: '',
    }
  },
  methods: {
    reset() {
      this.$refs.form.reset()
    },
    cart() {
      const data = {
        price: this.price,
        number: this.refNO,
        genre: this.genre,
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
          this.genre = select1[0]
          this.price = price1[0]
        })
    },
  },
}
</script>
