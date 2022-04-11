import { Button, Spacer, Text } from "@nextui-org/react"
import { Link } from "react-router-dom"
import Icon from "../../assets/Icon/Icon"
import anagrammer from "../../img/anagrammer.svg"

const Welcome = () => {
  return (
    <div style={{ display: "grid", placeItems: "center", textAlign: "center" }}>
      <Text h2>Welcome to Anagrammer!</Text>
      <Spacer y={1} />
      <Icon src={anagrammer} width={150} />
      <Spacer y={2} />
      <Link to="/create">
        <Button size="xl" auto color="gradient">
          Let's make anagrams
        </Button>
      </Link>
    </div>
  )
}

export default Welcome
