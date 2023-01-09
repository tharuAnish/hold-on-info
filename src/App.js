import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Create from "./pages/Create/Create"
import Search from "./pages/Search/Search"
import Navbar from "./components/Navbar/Navbar"
import Recipe from "./pages/Recepie/Recipe"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          {/* with id can give which item  */}
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
