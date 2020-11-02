<template>
  <div>
    <v-list-item v-for="item in cart" :key="item.number">
      <v-card class="mx-auto pa-4" elevation="11"></v-card>
    </v-list-item>
    <v-row>
      <v-col cols="3">
        <img
          src="https://www.lnwtrue.com/static/images/product/truemoney-1.jpg"
          alt=""
        />
      </v-col>
      <v-col cols="3">
        <img
          src="https://www.lnwtrue.com/static/images/product/12call-1.jpg"
          alt=""
        />
      </v-col>
      <v-col cols="3">
        <img
          src="http://tasty-dsign.com/demo/playzone/images/dtac-1.jpg"
          alt=""
        />
      </v-col>
    </v-row>
    <v-card class="mx-auto pa-4" elevation="11">
      <h3>ซื้อบัตรเติมเงินโทรศัพท์</h3>
      <v-form>
        <v-row>
          <v-col cols="8">
            <v-select
              v-model="genre1"
              :items="genre"
              label="เครือข่าย"
              required
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="number"
              input
              type="number"
              min="1"
              value="1"
              length="10"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          ราคา
          <v-checkbox v-model="price" label="50" value="50"> </v-checkbox>
          <v-checkbox v-model="price" label="150" value="150"> </v-checkbox>
          <v-checkbox v-model="price" label="300" value="300"> </v-checkbox>
          <v-checkbox v-model="price" label="500" value="500"> </v-checkbox>
          <v-checkbox v-model="price" label="1000" value="1000"> </v-checkbox>
        </v-row>
        <v-row>
          <v-text-field solo readonly>{{ summary }}</v-text-field>
        </v-row>

        <v-row>
          <v-col cols="10"> </v-col>
          <v-col cols="2">
            <v-btn color="primary" text @click="addData(), reset(), addcart()">
              Submit
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import firebase from 'firebase'
import { db } from '~/plugins/Fb.js'
export default {
  data() {
    return {
      genre1: '',
      genre: ['AIS', 'Dtac', 'Truemove', 'TOT Moblie'],
      price: '',
      number: '1',
    }
  },
  methods: {
    reset() {
      this.$refs.form.reset()
    },
    addData() {
      const data = {
        genre: this.genre1,
        price: this.price,
        number: this.number,
        time: firebase.firestore.Timestamp.now(),
        summary: this.price * this.number,
      }
      db.collection('phone')
        .add(data)
        .then(() => {
          console.log('add to db')
        })
      this.$store.commit('set_cart', data)
    },
  },
}
</script>
