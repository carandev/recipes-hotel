import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CardRecipe = ({ recipe }) => {
  // const [recipeInformation, setRecipeInformation] = useState({})

  // useEffect(() => {
  //   axios.get(`https://api.spoonacular.com/recipes/${recipe.id}/information`, {
  //     params: {
  //       apiKey: import.meta.env.VITE_API_KEY
  //     }
  //   }).then(response => {
  //     setRecipeInformation(response.data)
  //   })
  // }, [])

  return (
    <li>
      <h3>{recipe.title}</h3>
      <img alt={recipe.title} src={recipe.image} />
      {/* <p>{recipeInformation.vegan ? 'Vegan' : 'No vegan'}</p> */}
      {/* <p>Preparation minutes: {recipeInformation.preparationMinutes}</p> */}
      {/* <p>Cooking minutes: {recipeInformation.cookingMinutes}</p> */}
    </li>
  )
}

export default CardRecipe
