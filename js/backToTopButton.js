const backToTopButton = () => {
  const resizeObserver = new ResizeObserver(entries => {
    if (entries[0].target.clientHeight <= window.innerHeight) {
      document.getElementById('back-to-top').classList.add('disabled')
    } else {
      document.getElementById('back-to-top').classList.remove('disabled')
    }
  })

  resizeObserver.observe(document.body)

  document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
}

export default backToTopButton
