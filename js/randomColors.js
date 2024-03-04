const randomColors = () => {
  const colorArray = [
    '#cc9970',
    '#a97e5c',
    '#937b6a',
    '#a0a0a0',
    '#838383',
    '#9eb5c0',
    '#839ca9',
    '#6d838e',
    '#c87e7e',
    '#a05e5e',
    '#b089ab',
    '#8e6d89',
    '#b9ab73',
    '#978c63',
    '#87a985',
    '#6f8b6e'
  ]
  return colorArray[Math.floor(Math.random() * colorArray.length)]
}

export default randomColors
