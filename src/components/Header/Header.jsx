import { Button, Spacer, Text } from "@nextui-org/react"
import Icon from "../../assets/Icon/Icon"
import useAppContext from "../../context/useAppContext"
import anagrammer from "../../img/anagrammer.svg"
import { HeaderWrapper, InnerWrapper, Navbar } from "./style"

export const Header = () => {
  const { anagrams, setShowAnagrams } = useAppContext()

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
          <Button
            size="sm"
            auto
            color="error"
            onClick={() => setShowAnagrams(true)}
          >
            My anagrams ( <strong>{anagrams.length}</strong> )
          </Button>
          <Button
            size="sm"
            auto
            rounded
            color="gradient"
            onClick={() => setShowAnagrams(false)}
          >
            Create
          </Button>
        </Navbar>
      </InnerWrapper>
    </HeaderWrapper>
  )
}
