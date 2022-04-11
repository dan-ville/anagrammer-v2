import {
  Button,
  Card,
  Checkbox,
  Grid,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import useAppContext from "../../context/useAppContext"
import { CenteredGrid, FlexWrapper } from "./style"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { FiTrash2 } from "react-icons/fi"

const MyAnagrams = () => {
  const navigate = useNavigate()
  const { myAnagrams, setMyAnagrams } = useAppContext()
  const [toggleDeleteMode, setToggleDeleteMode] = useState(false)
  const [listsToDelete, setListsToDelete] = useState([])

  const toggleList = (id) => {
    const selected = listsToDelete.indexOf(id) !== -1
    if (selected) {
      setListsToDelete((prev) => prev.filter((listId) => listId !== id))
    } else {
      setListsToDelete((prev) => [...prev, id])
    }
  }

  const handleDelete = () => {
    setMyAnagrams((prev) =>
      prev.filter((list) => listsToDelete.indexOf(list.id) === -1)
    )
  }

  return (
    <>
      {myAnagrams.length ? (
        <>
           <FlexWrapper>
            <Checkbox
              checked={toggleDeleteMode}
              onChange={() => setToggleDeleteMode((prev) => !prev)}
            >
              Select
            </Checkbox>
            {toggleDeleteMode ? (
              <Button size="sm" auto color="warning" ghost onClick={handleDelete}>
                <FiTrash2 />
              </Button>
            ) : null}
          </FlexWrapper>
          <Grid.Container gap={2} justify="flex-start">
            {myAnagrams.map((list, index) => {
              const isSelected = listsToDelete.indexOf(list.id) !== -1
              return (
                <Grid xs={24} sm={4} key={index}>
                  <Card
                    hoverable
                    clickable
                    bordered={toggleDeleteMode}
                    color="gradient"
                    onClick={
                      toggleDeleteMode
                        ? () => toggleList(list.id)
                        : () => navigate(`/my-anagrams/${list.id}`)
                    }
                  >
                    <Card.Body>
                      <Text
                        css={{
                          fontSize: "1.25rem",
                          wordBreak: "break-word",
                        }}
                      >
                        {list.word}
                      </Text>
                    </Card.Body>
                    <Card.Footer justify="flex-start">
                      <Row wrap="wrap" justify="space-between" align="center">
                        <Text b>{list.quantity}</Text>
                        {toggleDeleteMode && isSelected ? (
                          <AiOutlineCheckCircle />
                        ) : null}
                      </Row>
                    </Card.Footer>
                  </Card>
                </Grid>
              )
            })}
          </Grid.Container>
        </>
      ) : (
        <CenteredGrid>
          <div>
            <Text size={18}>No anagrams yet 🥶</Text>
            <Text size={18}>Let's make some!</Text>
            <Spacer />
            <Link to="/create">
              <Button size="xl" rounded color="gradient">
                Create
              </Button>
            </Link>
          </div>
        </CenteredGrid>
      )}
    </>
  )
}

export default MyAnagrams
