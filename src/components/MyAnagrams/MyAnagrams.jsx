import { Button, Spacer, Text } from "@nextui-org/react"
import React, { Fragment } from "react"
import useAppContext from "../../context/useAppContext"
import { List } from "../List/List"
import { CenteredGrid } from "./style"

const MyAnagrams = () => {
  const { anagrams, setShowAnagrams } = useAppContext()

  if (anagrams.length === 0)
    return (
      <CenteredGrid>
        <Text size={18}>No anagrams yet 🥶</Text>
        <Text size={18}>Let's make some!</Text>
        <Spacer />
        <Button
          size="xl"
          auto
          rounded
          color="gradient"
          onClick={() => setShowAnagrams(false)}
        >
          Create
        </Button>
      </CenteredGrid>
    )

  return (
    <>
      <Text h2>My anagrams</Text>
      {anagrams.map((list, index) => (
        <Fragment key={list.id}>
          <Spacer y={2} />
          <List list={list} index={index + 1} />
        </Fragment>
      ))}
    </>
  )
}

export default MyAnagrams
