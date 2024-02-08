import { createStore } from 'vuex'

interface State {
  isDrawerOpen: boolean
}

const store = createStore({
  state: {
    isDrawerOpen: false
  } as State,
  mutations: {
    setDrawerOpen(state: State, value: boolean) {
      state.isDrawerOpen = value
    },
  }, 
  actions: {
    toggleDrawer({ commit, state }: { commit: any, state: State }) {
      commit('setDrawerOpen', !state.isDrawerOpen)
    }
  }
})

export default store

