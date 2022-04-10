import { Input, Button, Spacer } from "@nextui-org/react"
import { useForm } from "react-hook-form"
import { Flex, StyledForm } from "./style"
import uuid from "react-uuid"
import useAppContext from "../../context/useAppContext"
import AnagramList from "../AnagramList"

// const factorial = (x) => {
//   if (x === 0) return 1
//   return x * factorial(x - 1)
// }

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

const createAnagramFromWord = (word) => {
  const letters = word.toUpperCase().split("")
  return shuffle(letters).join("")
}

// const generateAnagrams = (word, anagram = "", anagrams = []) => {
//   if (!word) {
//     anagrams.push(anagram)
//     return
//   }
//   for (let i = 0; i < word.length; i++) {
//     anagram += word[i]
//     generateAnagrams(word.slice(0, i) + word.slice(i + 1), anagram, anagrams)
//     anagram = anagram.slice(0, anagram.length - 1)
//   }
//   return [...new Set(anagrams)]
// }

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

const ActiveList = () => {
  const { myAnagrams, activeListId } = useAppContext()
  const activeList =
    myAnagrams.length && myAnagrams.find((list) => list.id === activeListId)

  return activeList ? <AnagramList list={activeList} /> : null
}

const Create = () => {
  const { setMyAnagrams, activeListId, setActiveListId } = useAppContext()
  const { register, handleSubmit } = useForm()

  // const permutations = factorial(word.length)

  const onSubmit = (data) => {
    const { quantity, word } = data
    const number = Number(quantity)
    const newAnagrams = generateAny(number, word)
    const newList = { id: uuid(), word, quantity, anagrams: newAnagrams }
    setMyAnagrams((prev) => [...prev, newList])
    setActiveListId(newList.id)
  }

  // const onSubmit = (data) => {
  //   const { word } = data
  //   const newAnagrams = generateAnagrams(word)
  //   setMyAnagrams((prev) => [...newAnagrams])
  // }

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Flex>
          <Input
            css={{ width: "100%" }}
            type="text"
            bordered
            {...register("quantity", { required: true })}
            label="Number of anagrams"
          />
          <Input
            css={{ width: "100%" }}
            type="text"
            bordered
            label="Word to use"
            {...register("word", { required: true })}
          />
        </Flex>
        <Spacer y={1.5} />
        <Button type="submit" auto color="gradient" shadow bordered>
          Generate
        </Button>
      </StyledForm>
      {activeListId ? <Spacer y={2} /> : null}
      <ActiveList />
    </>
  )
}

export default Create
