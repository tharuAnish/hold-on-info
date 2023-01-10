import "./Navbar.css"
import { Link } from "react-router-dom"
import Searchbar from "../Searchbar/Searchbar"

export default function Navbar() {
  return (
    <div className="navbar">
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
