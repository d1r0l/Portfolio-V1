document.getElementById('back-to-top').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

const cardArray = [
  {
    title: 'Bloglist',
    description: 'Bloglist description',
    link: 'https://bloglist.d1r0l.xyz/',
    gitLink: 'https://github.com/d1r0l/bloglist',
    screenshot: './screenshots/Screenshot_BlogList.png',
    altScreenshot: 'screenshot of Bloglist webpage'
  },
  {
    title: 'Project title',
    description: 'Project description',
    link: 'link2',
    gitLink: 'gitlink2',
    screenshot: 'screenshot_2',
    altScreenshot: 'screenshot of project webpage'
  }
]

const createElement = (tag, props, children) => {
  const element = document.createElement(tag)
  for (const key in props) {
    element[key] = props[key]
  }
  if (children) {
    children.forEach(child => element.appendChild(child))
  }
  return element
}

const cardsDiv = document.querySelector('.projects-container')

const gitIcon = () =>
  createElement('img', {
    src: '/icons/GitHub-16.svg',
    alt: 'github icon',
    className: 'icon'
  })

const linkIcon = () =>
  createElement('img', {
    src: '/icons/Link-16.svg',
    alt: 'link icon',
    className: 'icon'
  })

for (const card of cardArray) {
  const cardDiv = createElement(
    'div',
    {
      className: 'project-section'
    },
    [
      createElement('img', {
        className: 'screenshot sticker',
        src: card.screenshot,
        alt: card.altScreenshot
      }),
      createElement(
        'div',
        {
          className: 'card'
        },
        [
          createElement(
            'div',
            {
              className: 'card-display'
            },
            [
              createElement('p', {
                textContent: card.description
              }),
              createElement('div', {}, [
                createElement(
                  'a',
                  {
                    href: card.link
                  },
                  [linkIcon()]
                ),
                createElement(
                  'a',
                  {
                    href: card.gitLink
                  },
                  [gitIcon()]
                )
              ])
            ]
          ),
          createElement('h2', {
            className: 'card-label',
            textContent: card.title
          })
        ]
      )
    ]
  )

  cardsDiv.appendChild(cardDiv)
}
