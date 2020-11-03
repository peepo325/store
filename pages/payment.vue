<template>
  <div>
    <v-card class="mx-auto pa-4" elevation="11"></v-card>
    <h3>แบบฟอร์มการชำระเงิน</h3>
    <br />
    <v-form ref="form" v-model="valid">
      <v-row>
        <v-col cols="4"> </v-col>

        <v-col cols="4">
          <v-text-field v-model="price" prepend-icon="mdi-bank" label="ราคา"
            >{{ price }}
          </v-text-field>
        </v-col>
        <v-col cols="4"> </v-col>
      </v-row>
      <br />
      <center>
        <v-img
          src="https://th.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"
          width="200px"
        ></v-img>
      </center>
      <br />
      <center>
        <v-btn @click="random()">Random</v-btn>
        <div v-if="price != ''">
          <h3>Price</h3>
          <v-col cols="6">{{ price - 1 }}.{{ id }} </v-col>
        </div>
      </center>
      <v-file-input truncate-length="15"></v-file-input>
      <v-btn :disabled="!valid" color="success" @click="set(), reset()">
        ชำระเงิน
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import { db } from '~/plugins/Fb.js'
export default {
  data() {
    return {
      valid: false,
      phone: '',
      name: '',
      price: '',
      ran: 'XX',
    }
  },
  computed: {
    cart: {
      get() {
        return this.$nuxt.$store.state.cart
      },
      methods: {
        random() {
          document.getElementById('demo').innerHTML = Math.floor(
            Math.random() * 101
          )
        },
        set() {
          const payment = {
            phone: this.phone,
            name: this.name,
            price: this.price,
          }
          db.collection('payment')
            .add(payment)
            .then(() => {
              console.log('add to db')
            })
        },
        reset() {
          this.$refs.form.reset()
        },
      },
    },
  },
}
</script>
