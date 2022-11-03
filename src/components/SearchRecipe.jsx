import React, { useState } from 'react'

import InputSearch from './InputSearch'
import RecipeList from './RecipeList'

const SearchRecipe = () => {
  const [recipes, setRecipes] = useState([])

  return (
    <>
      <InputSearch setRecipes={setRecipes} />
      <RecipeList recipes={recipes} />
    </>
  )
}

export default SearchRecipe
