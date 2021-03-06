export const runSlider = () => {
  const slider = document.querySelector('.slider__list')
  const width = document.querySelector('.slider__item').offsetWidth
  const pagination = [...document.querySelector('.pagination').children]

  const moveSlider = multiplier => {
    slider.style.right = `${width * multiplier}px`
  }

  const handleClick = (item, index, array) => {
    array.find(item=>item.classList.contains('pagination__item_active')).classList.remove('pagination__item_active')
    item.classList.add('pagination__item_active')
    moveSlider(index)
  }

  handleClick(pagination[0], 0, pagination)

  pagination.forEach((item, index, array) => {
    item.addEventListener('click', () => {
      handleClick(item, index, array)
    })
  })
}