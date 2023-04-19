import "./Navbar.css"
import { Link } from "react-router-dom"
import Searchbar from "../Searchbar/Searchbar"
import { useTheme } from "../../hooks/useTheme"

export default function Navbar() {
  const { color, changeColor } = useTheme()
  //making a state to change color

  return (
    <div className="navbar" style={{ background: color }}>
      {/*This is the color that changes */}
      <nav onClick={() => changeColor("red")}>
        {/* here the color changes */}
        <Link to="/" className="brand">
          <h1>HoldOnInfo</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  )
}
