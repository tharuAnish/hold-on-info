import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    //if tryingn to fetch outside from the wrapp
    throw new Error("useTheme() must be used inside a ThemeProvider")
  }

  return context
}
