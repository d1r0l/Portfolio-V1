import loadCards from './loadCards.js'

loadCards()

document.getElementById('back-to-top').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

const resizeObserver = new ResizeObserver(entries => {
  if (entries[0].target.clientHeight <= window.innerHeight) {
    document.getElementById('back-to-top').classList.add('invisible')
  } else {
    document.getElementById('back-to-top').classList.remove('invisible')
  }
})

resizeObserver.observe(document.body)
