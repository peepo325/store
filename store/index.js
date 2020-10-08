export const state = () => ({
  drawer: false,
  list: [],
})

export const mutations = {
  set_drawer(state, val) {
    state.drawer = val
  },
  set_arr(state, val) {
    state.list.push(val)
  },
}
