import { createTheme } from "@nextui-org/react"

export const lightRetroTheme = createTheme({
  type: "light",
  className: "light-retro",
  theme: {
    colors: {
      primary: "#FFD34E",
      primaryLight: "transparent",
      error: "#EE457E",
    },
  },
})

export const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      background: "hsl(200, 7%, 8%)",
      white: "hsl(0, 0%, 85%)",
    },
  },
})
