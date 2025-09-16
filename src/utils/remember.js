export const remember = (store, item, key) => {
  store.dispatch(`${key}/setItem`, item)
}