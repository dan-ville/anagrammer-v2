import createAnagramFromWord from "./createAnagramFromWord"

const generateAny = (quantity, word) => {
  if (typeof quantity !== "number") {
    return []
  }
  const newAnagrams = []
  let i = 0
  while (i !== quantity) {
    const anagram = createAnagramFromWord(word)
    newAnagrams.push(anagram)
    i++
  }
  return newAnagrams
}

export default generateAny
