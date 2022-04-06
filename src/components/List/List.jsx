import { useContext, useState } from "react"
import { Button, Card, Checkbox, Text } from "@nextui-org/react"
import { ListHeader } from "./style"
import { AppContext } from "../../context/context"

export const List = ({ list, index = null }) => {
  const { setAnagrams } = useContext(AppContext)
  const [showGrid, setShowGrid] = useState(true)
  const { id, word, anagrams } = list

  const deleteList = (id) => {
    setAnagrams((prev) => prev.filter((current) => current.id !== id))
  }

  if (!anagrams.length) return <></>

  const Grid = () => {
    return (
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, auto)",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        {anagrams.map((item, i) => (
          <Card bordered key={i}>
            {item}
          </Card>
        ))}
      </section>
    )
  }
  const OrderedList = () => {
    return (
      <section
        style={{
          padding: "1rem",
        }}
      >
        <ol>
          {anagrams.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      </section>
    )
  }

  return (
    <>
      <ListHeader>
        <Text
          css={{
            textGradient: "45deg, $yellow500 -20%, $red500 100%",
          }}
        >
          {index ? `${index} - ` : null} <strong>{word.toUpperCase()}</strong>
        </Text>
        <Checkbox
          size="xs"
          color="gradient"
          checked={showGrid}
          onClick={() => setShowGrid((prev) => !prev)}
        >
          Grid
        </Checkbox>
        <Button size="xs" auto color="warning" ghost onClick={() => deleteList(id)}>
          Delete
        </Button>
      </ListHeader>
      {showGrid ? <Grid /> : <OrderedList />}
    </>
  )
}
