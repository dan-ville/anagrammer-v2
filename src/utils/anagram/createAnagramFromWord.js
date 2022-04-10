export default function createAnagramFromWord(word) {
  const shuffle = (array) => {
    let currentIndex = array.length
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
      let temporary = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporary
    }
    return array
  }

  const letters = word.toUpperCase().split("")
  return shuffle(letters).join("")
}
