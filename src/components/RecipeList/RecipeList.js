import { Link } from "react-router-dom"
import Trashcan from "../../assets/trash-can.svg"

// styles
import "./RecipeList.css"
import { useTheme } from "../../hooks/useTheme"
import { projectFirestore } from "../../firebase/config"

export default function RecipeList({ recipes }) {
  const { mode } = useTheme() //mode imported
  if (recipes.length === 0) {
    return <div className="error">No recipe to Load...</div>
  }

  const handleClick = (id) => {
    projectFirestore.collection("recipes").doc(id).delete()
  } //firebase delete

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
          <img
            className="delete"
            src={Trashcan}
            onClick={() => handleClick(recipe.id)}
            // we are again invoking so that it doesnot automatically fires
          />
        </div>
      ))}
    </div>
  )
}
