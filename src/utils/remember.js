export const remember = (store, items, key) => {
  store.dispatch(`${key}/setItems`, [...items])
}