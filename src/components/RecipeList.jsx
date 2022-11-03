import React from 'react'

import CardRecipe from './CardRecipe'

const RecipeList = ({ recipes }) => {
  return (
    <ul>
      {recipes.map(recipe => <CardRecipe key={recipe.id} recipe={recipe} />)}
    </ul>
  )
}

export default RecipeList
