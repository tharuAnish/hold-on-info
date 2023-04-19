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
    setIsPending(true) // because from this point we are going to start fetching the data
    //reach out the firestore to grab all the recepies from that collection
    projectFirestore
      .collection("recipes")
      .get()
      .then((snapshot) => {
        console.log(snapshot)
        // as it is asynchronous we use get then // as all the data from recipe collection is stored in snapshot
        //now check is the snapshot object empty
        if (snapshot.empty) {
          setError("No Recipes to load") //if is empty
          setIsPending(false)
        } else {
          // firestore is not empty
          let results = []
          snapshot.docs.forEach((doc) => {
            // console.log(doc)
            results.push({ id: doc.id, ...doc.data() })
          }) // loop all data with for each //in colsole we saw the snapshot property docs contains array of data
          setData(results)
          setIsPending(false)
        }
      })
      .catch((err) => {
        setError(err.message)
        setIsPending(false)
      })
  }, [])
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}
