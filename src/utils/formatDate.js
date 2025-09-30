export const formatDate = (iso) => {
  const d = new Date(iso)
  const lang = localStorage.getItem('lang')
  return d.toLocaleDateString(lang, { month: 'short', day: 'numeric', year: 'numeric' })
}