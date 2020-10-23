<template>
  <v-row align="center" justify="center">
    <v-col align="center" justify="center">
      <v-img
        lazy-src="https://i.pinimg.com/originals/bd/9d/04/bd9d04e36bfd6faaaefd9f54d67be6cf.jpg"
        max-height="400"
        max-width="650"
        src="https://i.pinimg.com/originals/bd/9d/04/bd9d04e36bfd6faaaefd9f54d67be6cf.jpg"
      ></v-img>
    </v-col>
    <v-bottom-navigation color="primary">
      <v-btn>
        <span>Valorant</span>

        <v-icon>////</v-icon>
      </v-btn>

      <v-btn>
        <span>Dota 2</span>

        <v-icon>////</v-icon>
      </v-btn>

      <v-btn>
        <span>Rov</span>

        <v-icon>////</v-icon>
      </v-btn>

      <v-btn>
        <span>Freefire</span>

        <v-icon>////</v-icon>
      </v-btn>

      <v-btn>
        <span>Pubg-M</span>

        <v-icon>////</v-icon>
      </v-btn>
      <v-btn>
        <span>CS-GO</span>

        <v-icon>////</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-form ref="form" v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="Username"
              :rules="nameRules"
              label="User(ชื่อผู้ใช้)"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="TagName"
              :rules="nameRules"
              label="Tagname"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-checkbox
              v-model="pice"
              label="300 VP : 85 THB"
              color="red darken-3"
              value="1"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col>
            <v-checkbox
              v-model="pice"
              label="625 VP : 160 THB"
              color="red darken-3"
              value="2"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col>
            <v-checkbox
              v-model="pice"
              label="1125 VP : 280 THB"
              color="red darken-3"
              value="3"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col>
            <v-checkbox
              v-model="pice"
              label="1650 VP : 400 THB"
              color="red darken-3"
              value="4"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn color="primary" text @click="set(), reset()">Submit</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-row>
</template>

<script>
import { db } from '~/plugins/Fb.js'
export default {
  data() {
    return {
      valid: false,
      Username: '',
      TagName: '',
      hidden: false,
      pice: [],
      list: [],
      arr: [],
      nameRules: [
        (v) => !!v || 'กรุณากรอก User(ชื่อผู้ใช้)',
        (v) => v.length >= 6 || 'User(ชื่อผู้ใช้) ต้องไม่ต่ำกว่า 6 ตัวอักษร',
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }
  },
  methods: {
    reset() {
      this.$refs.form.reset()
    },
    set() {
      const data = {
        username: this.Username,
        tagmame: this.TagName,
        email: this.email,
        pice: this.pice,
      }
      db.collection('Game')
        .add(data)
        .then(() => {
          console.log('add to db')
        })
    },
  },
}
</script>
