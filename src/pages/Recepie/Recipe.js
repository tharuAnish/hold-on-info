import { useParams } from "react-router-dom"

// styles
import "./Recipe.css"
import { useTheme } from "../../hooks/useTheme"
import { useEffect, useState } from "react"
import { projectFirestore } from "../../firebase/config"

export default function Recipe() {
  const { id } = useParams() // id this time is going to be the firestore id
  const { mode } = useTheme() //imported for dark mode

  const [recipe, setRecipe] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)
    projectFirestore
      .collection("recipes")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setIsPending(false)
          setRecipe(doc.data())
        } else {
          setIsPending(false)
          setError("Could not find that recipe")
        }
      })
    //we are not using get only doc here like collection here because we are fetching only one document
  }, [id])

  // function to update

  const handleClick = () => {
    projectFirestore.collection("recipes").doc(id).update({
      title: "something different",
    })
  }

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
          {/* button to update */}
          <button onClick={handleClick}>UpdateMe</button>
        </>
      )}
    </div>
  )
}
