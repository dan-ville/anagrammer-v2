import { Button } from "@nextui-org/react"
import React from "react"
import { Link } from "react-router-dom"

const Welcome = () => {
  return (
    <>
      <div>Welcome to Anagrammer!</div>
      <Link to="/create">
        <Button size="sm" auto rounded color="gradient">
          Create some anagrams
        </Button>
      </Link>
    </>
  )
}

export default Welcome
