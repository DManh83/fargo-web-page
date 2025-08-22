export const onImgErr = (e) => {
  e.target.style.display = 'none'
  e.target.parentElement.classList.add('is-empty')
}