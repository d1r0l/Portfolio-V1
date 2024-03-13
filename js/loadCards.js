import randomColors from './randomColors.js'

const loadCards = async () => {
  const fetchProjects = async () => {
    const responsePromise = await fetch('./js/projects.json')
    const response = await responsePromise.json()
    return response
  }

  const projects = await fetchProjects()

  const cardsDiv = document.querySelector('.projects-container')

  const createTag = (tag, props, children) => {
    const element = document.createElement(tag)
    for (const key in props) {
      element[key] = props[key]
    }
    if (children) {
      children.forEach(child => element.appendChild(child))
    }
    return element
  }

  const gitIcon = () =>
    createTag('img', {
      src: './assets/icons/github.svg',
      alt: 'github icon',
      className: 'icon'
    })

  const linkIcon = () =>
    createTag('img', {
      src: './assets/icons/external-link.svg',
      alt: 'link icon',
      className: 'icon'
    })

  for (const card of projects) {
    const cardDiv = createTag('li', { className: 'project-card card' }, [
      card.screenshot
        ? createTag('img', {
            className: 'screenshot',
            src: card.screenshot,
            alt: card.altScreenshot
          })
        : createTag(
            'div',
            {
              className: 'screenshot',
              style: `background-color: ${randomColors()}`
            },
            [
              createTag('span', {
                className: 'screenshot-label',
                textContent: 'No screenshot of the project available'
              })
            ]
          ),
      createTag('div', { className: 'project-card-grid' }, [
        createTag('h2', { className: 'card-label', textContent: card.title }),
        createTag('div', {}, [
          createTag('a', { href: card.gitLink }, [gitIcon()]),
          createTag('a', { href: card.link }, [linkIcon()])
        ]),
        createTag('p', { textContent: card.description })
      ])
    ])

    cardsDiv.appendChild(cardDiv)
  }
}

export default loadCards
