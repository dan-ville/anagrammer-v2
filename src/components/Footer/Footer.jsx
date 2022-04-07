import { useTheme } from "@nextui-org/react"
import React from "react"

const useStyles = () => {
  const { theme } = useTheme()

  return {
    footerWrapper: {
      padding: "0.5rem 1rem",
      borderTop: `1px solid ${theme.colors.gray800.value}`,
      width: "100%",
      margin: "0 auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  }
}

const Footer = () => {
  const s = useStyles()

  return (
    <div style={s.footerWrapper}>Made in America 🇺🇸 🦅 by Daniel Villegas</div>
  )
}

export default Footer
