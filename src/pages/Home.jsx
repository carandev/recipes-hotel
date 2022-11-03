import React, { useState } from 'react'

import SearchRecipe from '../components/SearchRecipe'

const Home = () => {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <main>
      <h1>Recipes hotel</h1>
      <section>
        <button onClick={() => setShowSearch(lastValue => !lastValue)}>
          Add Recipe
        </button>
      </section>
      <p>Total price:</p>
      <p>Tiempo de preparación</p>
      <p>Health score</p>
      {showSearch && <SearchRecipe />}
    </main>
  )
}

export default Home
