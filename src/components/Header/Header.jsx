import { Button, Spacer, Text, useTheme } from "@nextui-org/react"
import Icon from "../../assets/Icon/Icon"
import useAppContext from "../../context/useAppContext"
import anagrammer from "../../img/anagrammer.svg"

const useStyles = () => {
  const { theme } = useTheme()

  return {
    headerWrapper: {
      padding: "0.5rem 1rem",
      borderBottom: `1px solid ${theme.colors.gray800.value}`,
      width: "100%",
    },
    innerWrapper: {
      maxWidth: "800px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    navLinks: {
      display: "flex",
      gap: "1rem",
      width: "100%",
      justifyContent: "flex-end",
      alignItems: "center",
    },
  }
}

export const Header = () => {
  const { anagrams, setShowAnagrams } = useAppContext()
  const s = useStyles()

  return (
    <div style={s.headerWrapper}>
      <div style={s.innerWrapper}>
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
        <div style={s.navLinks}>
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
