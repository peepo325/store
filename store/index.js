export const state = () => ({
  list: [],
  cart: [],
  totalAmount: [],
})

export const mutations = {
  set_array(state, newData) {
    console.log('set_array', newData)
    state.list = newData
  },
  set_cart(state, newData) {
    console.log('set_cart', newData)
    state.cart.push(newData)
  },
}
