import React from 'react'
import styles from './RecipeCard.module.css'

const RecipeCard = ({recipe}) => {
  return (
    <section className={styles.section}>
      <h3>{recipe.title}</h3>
      <img src={recipe.image} alt={recipe.title}/>
    </section>
  )
}

export default RecipeCard
