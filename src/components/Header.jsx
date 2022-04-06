import { Button, Spacer, Text, useTheme } from "@nextui-org/react"
import Icon from "../assets/Icon/Icon"
import useAppContext from "../context/useAppContext"
import anagrammer from "../img/anagrammer.svg"

export const Header = () => {
  const { anagrams, setShowAnagrams } = useAppContext()
  const { theme } = useTheme()

  return (
    <div
      style={{
        padding: "0.5rem 1rem",
        borderBottom: `1px solid ${theme.colors.gray800.value}`,
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
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
        <div
          style={{
            display: "flex",
            gap: "1rem",
            width: "100%",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
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
        </div>
      </div>
    </div>
  )
}
