import { Text } from "@nextui-org/react"
import createAnagramFromWord from "../../utils/anagram/createAnagramFromWord"

const NotFoundPage = () => {
  const anagram = createAnagramFromWord("Sorry, that page doesn't exist!")

  return (
    <div>
      <Text h3>{anagram}</Text>
      <Text css={{ fontSize: "0.8rem" }}>
        (<em>Sorry, that page doesn't exist!</em>)
      </Text>
    </div>
  )
}

export default NotFoundPage
