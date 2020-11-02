<template>
  <div>
    <v-list-title>
      <v-text-field
        v-model="refNO"
        label="REF Number"
        outlined
        :counter="13"
      ></v-text-field>
    </v-list-title>
    <v-btn @click="search(), reset()">ตรวจสอบ</v-btn>
    <v-card class="mx-auto" max-width="344">
      <v-card-text>
        <div>
          <ul id="detail"></ul>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="deep-purple accent-4">ADD TO CART</v-btn>
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
import firebase from 'firebase'
import { db } from '~/plugins/Fb.js'
export default {
  data() {
    return {
      valid: true,
      arr: {},
      refNO: '',
      phone: '',
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: ['ค่าไฟ', 'ค่าน้ำ'],
    }
  },
  methods: {
    reset() {
      this.refNO = ''
    },
    set() {
      const data = {
        email: this.email,
        phone: this.phone,
        select: this.select,
        time: firebase.firestore.Timestamp.now(),
      }
      /* db.collection('Bill')
        .add(data)
        .then(() => {
          console.log('add to db')
        }) */
      this.$store.commit('set_cart', data)
    },
    search() {
      const detail = document.querySelector('#detail')
      function renderdetail(doc) {
        const li = document.createElement('li')
        // let email = document.createElement('span')
        const phone = document.createElement('span')
        const select = document.createElement('span')
        const price = document.createElement('span')

        li.setAttribute('data-id', doc.id)
        // email.textContent = doc.data().email
        phone.textContent = doc.data().phone
        select.textContent = doc.data().select
        price.textContent = doc.data().price

        // title.appendChild(email)
        li.appendChild(phone)
        li.appendChild(select)
        li.appendChild(price)

        detail.appendChild(li)
      }
      db.collection('Bill')
        .where('refNO', '==', this.refNO)
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            renderdetail(doc)
            console.log(doc.data())
          })
        })
    },
  },
}
</script>
