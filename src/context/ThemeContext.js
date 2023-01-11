import { createContext } from "react"

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  //this children is the components whichever wegoing to make inside ThemeProvider
  return (
    <ThemeContext.Provider value={{ color: "blue" }}>
      {children} {/* App will be the children here */}
    </ThemeContext.Provider>
  )
}
