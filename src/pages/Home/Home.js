import "./Home.css"
import { useFetch } from "../../hooks/useFetch"

export default function Home() {
  const { data, isLoading, error } = useFetch("http://localhost:3000/recipes")
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">Loading...</p>}
      {/*if only we have data then only it will fetch */}
      {data &&
        data.map((recepie) => (
          <div key={recepie.id}>
            <h2>{recepie.title}</h2>
          </div>
        ))}
    </div>
  )
}
