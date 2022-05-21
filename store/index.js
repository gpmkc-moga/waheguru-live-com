export const state = () => ({
    isPopupShown: false
})

export const mutations = {
    registerPopupShown(state) {
      state.isPopupShown = true
    }
  }