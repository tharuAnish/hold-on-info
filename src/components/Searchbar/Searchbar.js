import { useState } from "react"
import "./Searchbar.css"
import { useNavigate } from "react-router-dom"

export default function Searchbar() {
  const [term, setTerm] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault() // this weill prevent page from refreshing when form submitted
    navigate(`/search?=${term}`)
  }

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          onChange={(e) => setTerm(e.target.value)}
          required
        />
      </form>
    </div>
  )
}
