import { createStore } from 'vuex'

const STORAGE_KEY = 'newsStore'

const persistPlugin = (store) => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const saved = JSON.parse(raw)
      if (saved?.news) {
        store.replaceState({ ...store.state, news: saved.news })
      }
      if (saved?.career) {
        store.replaceState({ ...store.state, career: saved.career })
      }
    }
  } catch (e) {
    console.warn('Failed to load persisted state', e)
  }

  store.subscribe((_mutation, state) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ news: state.news, career: state.career })
      )
    } catch (e) {
      console.warn('Failed to persist state', e)
    }
  })
}

export default createStore({
  plugins: [persistPlugin],
  modules: {
    news: {
      namespaced: true,
      state: () => ({
        byId: {},
        currentId: null
      }),
      getters: {
        currentItem: (s) => (s.currentId ? s.byId[s.currentId] : null),
        getById: (s) => (id) => s.byId[id] || null,
        all: (s) => Object.values(s.byId),
      },
      mutations: {
        SET_ITEM(state, item) {
          if (item?.id == null) return
          state.byId[item.id] = item
          state.currentId = item.id
        },
        SET_ITEMS(state, list = []) {
          list.forEach((it) => {
            if (it?.id != null) state.byId[it.id] = it
          })
        },
        SELECT_BY_ID(state, id) {
          state.currentId = id
        },
      },
      actions: {
        setItem({ commit }, item) {
          commit('SET_ITEM', item)
        },
        setItems({ commit }, list) {
          commit('SET_ITEMS', list)
        },
        selectById({ commit }, id) {
          commit('SELECT_BY_ID', id)
        },
      }
    },
    career: {
      namespaced: true,
      state: () => ({
        byId: {},
        currentId: null
      }),
      getters: {
        currentItem: (s) => (s.currentId ? s.byId[s.currentId] : null),
        getById: (s) => (id) => s.byId[id] || null,
        all: (s) => Object.values(s.byId),
      },
      mutations: {
        SET_ITEM(state, item) {
          if (item?.id == null) return
          state.byId[item.id] = item
          state.currentId = item.id
        },
        SET_ITEMS(state, list = []) {
          list.forEach((it) => {
            if (it?.id != null) state.byId[it.id] = it
          })
        },
        SELECT_BY_ID(state, id) {
          state.currentId = id
        },
      },
      actions: {
        setItem({ commit }, item) {
          commit('SET_ITEM', item)
        },
        setItems({ commit }, list) {
          commit('SET_ITEMS', list)
        },
        selectById({ commit }, id) {
          commit('SELECT_BY_ID', id)
        },
      },
    },
  }
})
