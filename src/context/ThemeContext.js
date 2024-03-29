import { createContext, useReducer } from "react"

export const ThemeContext = createContext()

const themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload }
    case "CHANGE_MODE":
      return { ...state, mode: action.payload }
    default:
      return state
  }
}

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, {
    color: "blue",
    mode: "dark ", //giving the mode as dark
  })

  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color })
  }

  const changeMode = (mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode })
  }

  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {/*we want po pass the state that change color*/}
      {children} {/* App will be the children here */}
    </ThemeContext.Provider>
  )
}
