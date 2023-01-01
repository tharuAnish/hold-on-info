import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Create from "./pages/Create/Create"
import Search from "./pages/Search/Search"
import Recepie from "./pages/Recepie/Recepie"
import Navbar from "./components/Navbar/Navbar"

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
          <Route path="/recipes/:id" element={<Recepie />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
