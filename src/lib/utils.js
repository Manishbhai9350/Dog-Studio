export const splitIntoThreeLines = (text = '') => {
  const words = text.split(' ')
  const total = words.length
  const perLine = Math.ceil(total / 3)

  return [
    words.slice(0, perLine).join(' '),
    words.slice(perLine, perLine * 2).join(' '),
    words.slice(perLine * 2).join(' ')
  ]
}
