<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-icon> mdi-cart </v-icon>
          </v-list-item-action>
          <v-list-item-title>Shopping Cart</v-list-item-title>
        </v-list-item>
        <v-list-item v-for="item in cart" :key="item.number">
          <v-card-title>
            <v-list-item-content>
              <v-list-item-subtitle
                >รายการ : {{ item.genre }}
              </v-list-item-subtitle>
              <v-list-item-subtitle
                >จำนวน : {{ item.number }}
              </v-list-item-subtitle>
              <v-list-item-subtitle
                >ราคา : {{ item.price }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-card-title>
        </v-list-item>
        <center>
          <v-btn nuxt link to="payment">ชำระเงิน</v-btn>
        </center>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: false,

      items: [
        {
          icon: 'mdi-home',
          title: 'Homepage',
          to: '/',
        },
        {
          icon: 'mdi-phone',
          title: 'Mobile',
          to: '/phone',
        },
        {
          icon: 'mdi-play',
          title: 'Game',
          to: '/Game',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Top up store',
    }
  },
  computed: {
    cart: {
      get() {
        return this.$nuxt.$store.state.cart
      },
    },
  },
}
</script>
