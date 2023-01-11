import "./Navbar.css"
import { Link } from "react-router-dom"
import Searchbar from "../Searchbar/Searchbar"
import { useTheme } from "../../hooks/useTheme"

export default function Navbar() {
  const { color } = useTheme()

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>HoldOnInfo</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  )
}
