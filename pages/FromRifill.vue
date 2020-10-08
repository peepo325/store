<template>
  <div>
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
      <v-form ref="form">
        <v-row>
          <v-col cols="8">
            <v-text-field
              v-model="phone"
              label="เบอร์โทรศัพท์"
              prepend-icon="mdi-cellphone"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-select
              v-model="genre"
              :items="genre"
              label="เครือข่าย"
              required
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          ราคา
          <v-checkbox
            v-model="price"
            label="50"
            value="50"
            hide-details="false"
          >
          </v-checkbox>
          <v-checkbox v-model="price" label="90" value="90"> </v-checkbox>
          <v-checkbox v-model="price" label="150" value="150"> </v-checkbox>
          <v-checkbox v-model="price" label="300" value="300"> </v-checkbox>
          <v-checkbox v-model="price" label="500" value="500"> </v-checkbox>
        </v-row>

        <v-row>
          <v-col cols="10"> </v-col>
          <v-col cols="2">
            <v-btn color="primary" text @click="set()"> Submit </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: '',
      genre: ['AIS', 'Dtac', 'Truemove', 'TOT Moblie'],
      price: [],
      dialog1: false,
    }
  },
  methods: {
    dialog(val) {
      if (!val) return

      setTimeout(() => (this.dialog = false), 4000)
    },
    set() {
      this.arr = {
        genre: this.genre,
        phone: this.phone,
        price: this.price,
      }
      this.$store.commit('set_arr', this.arr)
    },
  },
}
</script>
