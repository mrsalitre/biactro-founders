export const state = () => ({
  provider: null
})

export const mutations = {
  SET_PROVIDER(state, provider) {
    state.provider = provider
  }
}