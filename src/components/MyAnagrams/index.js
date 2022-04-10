import { Button, Card, Grid, Row, Spacer, Text } from "@nextui-org/react"
import React from "react"
import { Link, useNavigate } from "react-router-dom"
import useAppContext from "../../context/useAppContext"
import { CenteredGrid } from "./style"

const MyAnagrams = () => {
  const { myAnagrams } = useAppContext()
  const navigate = useNavigate()

  return (
    <>
      <Text h2 css={{ m: 0, marginBottom: "10px" }}>
        My anagrams
      </Text>
      {myAnagrams.length ? (
        <>
          <Grid.Container gap={2} justify="flex-start">
            {myAnagrams.map((list, index) => (
              <Grid xs={24} sm={4} key={index}>
                <Card
                  hoverable
                  clickable
                  color="gradient"
                  onClick={() => navigate(`/my-anagrams/${list.id}`)}
                >
                  <Card.Body>
                    <Text h3>
                      {list.word.length > 20
                        ? `${list.word.slice(0, 20)}...`
                        : list.word}
                    </Text>
                  </Card.Body>
                  <Card.Footer justify="flex-start">
                    <Row wrap="wrap" justify="space-between" align="center">
                      <Text b>{list.quantity}</Text>
                    </Row>
                  </Card.Footer>
                </Card>
              </Grid>
            ))}
          </Grid.Container>
        </>
      ) : (
        <CenteredGrid>
          <div>
            <Text size={18}>No anagrams yet 🥶</Text>
            <Text size={18}>Let's make some!</Text>
            <Spacer />
            <Link to="/create">
              <Button size="xl" auto rounded color="gradient">
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
