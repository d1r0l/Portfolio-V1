const transitions = () => {
  let timeouts = {}
  const intersectionObserver = new IntersectionObserver(entries => {
    const showOnIntersection = entry => {
      if (entry.isIntersecting) entry.target.classList.add('show')
    }

    for (let i = 0; i < entries.length; i++) {
      if (entries[i].target.className.includes('project-card')) {
        timeouts[entries[i].target.id] = setTimeout(() => {
          showOnIntersection(entries[i])
        }, i * 200)
      } else {
        showOnIntersection(entries[i])
      }
    }
  })

  const hiddenElements = document.querySelectorAll('.hidden')
  hiddenElements.forEach(element => intersectionObserver.observe(element))
}

export default transitions
