import { useContext, useState } from "react"
import { AppContext } from "../../context/context"
import { Button, Card, Checkbox, Spacer, Text } from "@nextui-org/react"
import { ListHeaderWrapper, ListBody, ToolbarWrapper } from "./style"
import { Link, useLocation, useNavigate } from "react-router-dom"

const AnagramList = ({ list }) => {
  const navigate = useNavigate()
  const { setMyAnagrams } = useContext(AppContext)
  const [showGrid, setShowGrid] = useState(true)
  const location = useLocation()
  const { id, word, anagrams } = list

  const deleteList = (id) => {
    setMyAnagrams((prev) => prev.filter((current) => current.id !== id))
    navigate("/my-anagrams")
  }

  if (!anagrams.length) return <></>

  const Grid = () => {
    return (
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, auto)",
          gap: "1rem",
          padding: "1rem 0",
        }}
      >
        {anagrams.map((item, i) => (
          <Card bordered key={i}>
            <Text
              css={{
                wordBreak: "break-word",
              }}
            >
              {item}
            </Text>
          </Card>
        ))}
      </section>
    )
  }
  const OrderedList = () => {
    return (
      <section
        style={{
          padding: "1rem 0",
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
  
  const Toolbar = () => {
    return (
      <>
        <Text
          h3
          css={{
            textGradient: "45deg, $yellow500 -20%, $red500 100%",
            wordBreak: "break-word",
          }}
        >
          <strong>{word.toUpperCase()}</strong>
        </Text>
        <Spacer y={1} />
        <ToolbarWrapper>
          <Checkbox
            size="xs"
            color="gradient"
            checked={showGrid}
            onClick={() => setShowGrid((prev) => !prev)}
          >
            Grid
          </Checkbox>
          <Button
            size="xs"
            auto
            color="warning"
            ghost
            onClick={() => deleteList(id)}
          >
            Del
          </Button>
          <Button auto ghost size="xs" onClick={() => navigate("/my-anagrams")}>
            Back
          </Button>
        </ToolbarWrapper>
      </>
    )
  }

  return (
    <>
      <ListHeaderWrapper>
        {location.pathname === "/create" ? (
          <Link to={`/my-anagrams/${list.id}`}>
            <Text
              h3
              css={{
                textGradient: "45deg, $yellow500 -20%, $red500 100%",
              }}
            >
              <strong>{word.toUpperCase()}</strong>
            </Text>
          </Link>
        ) : (
          <Toolbar />
        )}
      </ListHeaderWrapper>
      <ListBody>{showGrid ? <Grid /> : <OrderedList />}</ListBody>
    </>
  )
}

export default AnagramList
