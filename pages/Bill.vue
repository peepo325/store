<template>
  <div>
    <v-card class="pa-6 ma-2" elevation="6">
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
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="set(), reset()"
        >
          Submit
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

        <v-btn color="warning" @click="resetValidation">
          Reset Validation
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { db } from '~/plugins/Fb.js'
export default {
  data() {
    return {
      valid: true,
      arr: {},
      refNO: '',
      PhoneNumber: '',
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
      this.$refs.form.reset()
    },
    set() {
      const data = {
        refNO: this.refNO,
        email: this.email,
        phone: this.PhoneNumber,
        select: this.select,
      }
      db.collection('Bill')
        .doc(this.select)
        .add(data)
        .then(() => {
          console.log('add to db')
        })
    },
  },
}
</script>
