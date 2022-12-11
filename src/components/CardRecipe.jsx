import React from 'react'

const CardRecipe = ({ recipe }) => {
  return (
    <li>
      <h3>{recipe.title}</h3>
      <img alt={recipe.title} src={recipe.image} />
    </li>
  )
}

export default CardRecipe
