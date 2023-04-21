import { projectFirestore } from "../../firebase/config"
import RecipeList from "../../components/RecipeList/RecipeList"
// styles
import "./Home.css"
import { useEffect, useState } from "react"

export default function Home() {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    setIsPending(true)
    const unsub = projectFirestore.collection("recipes").onSnapshot(
      (snapshot) => {
        console.log(snapshot)

        if (snapshot.empty) {
          setError("No Recipes to load")
          setIsPending(false)
        } else {
          let results = []
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() })
          })
          setData(results)
          setIsPending(false)
        }
      },
      (err) => {
        //this is how we handle error in realtime
        setError(err.message)
        setIsPending(false)
      }
    )

    //return cleanup function
    //it will fire sutomatically when we unmount or go on a diff page
    return () => unsub()
  }, [])
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}
