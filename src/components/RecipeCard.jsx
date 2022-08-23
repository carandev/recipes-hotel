import React, { useState } from 'react'
import axios from 'axios'
import styles from './RecipeCard.module.css'

const RecipeCard = ({ recipe: recipeItem, id }) => {

  const [recipe, setRecipe] = useState({})
  const [show, setShow] = useState(false)

  const options = {
    method: 'GET',
    url: `https://api.spoonacular.com/recipes/${id}/information`,
    params: {
      apiKey: 'b79099b6ce5c47b4a5792481801abdc3',
    }
  };

  const fetchRecipe = () => {
    axios.request(options)
      .then(response => {
        setRecipe(response.data)
        setShow(lastValue => !lastValue)
      })
      .catch(console.error)
  }

  return (
    <section className={styles.section}>
      <h3 onClick={fetchRecipe}>{recipeItem.title}</h3>
      <img src={recipeItem.image} alt={recipeItem.title} />
      {show && <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>}
    </section>
  )
}

export default RecipeCard
