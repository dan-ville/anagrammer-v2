import { Button, Spacer, Text } from "@nextui-org/react"
import { Link } from "react-router-dom"
import Icon from "../../assets/Icon/Icon"
import useAppContext from "../../context/useAppContext"
import anagrammer from "../../img/anagrammer.svg"
import { HeaderWrapper, InnerWrapper, Navbar } from "./style"

export const Header = () => {
  const { myAnagrams } = useAppContext()

  return (
    <HeaderWrapper>
      <InnerWrapper>
        <Icon src={anagrammer} />
        <Spacer />
        <Text
          h1
          css={{
            textAlign: "left",
            fontSize: "1.5rem",
            fontWeight: 400,
            width: "100%",
          }}
        >
          Anagrammer
        </Text>
        <Navbar>
          <Link to="/my-anagrams">
            <Button size="sm" auto color="error">
              My anagrams ( <strong>{myAnagrams.length}</strong> )
            </Button>
          </Link>
          <Link to="/create">
            <Button size="sm" auto rounded color="gradient">
              Create
            </Button>
          </Link>
        </Navbar>
      </InnerWrapper>
    </HeaderWrapper>
  )
}
