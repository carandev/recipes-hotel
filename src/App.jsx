import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './App.module.css'
import RecipeCard from './components/RecipeCard.jsx'

function App() {

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [offset, setOffset] = useState(0)

  const options = {
    method: 'GET',
    url: 'https://api.spoonacular.com/recipes/complexSearch',
    params: {
      apiKey: 'b79099b6ce5c47b4a5792481801abdc3',
      query: search,
      offset,
      number: 50
    }
  };

  useEffect(() => {
    setOffset(0)
    if (search.length > 3){
      axios.request(options).then(function (response) {
        setRecipes(response.data.results)
      }).catch(function (error) {
        console.error(error);
      });
    }
  }, [search])

  const handleClick = action => {
    if (action === '<'){
      if(offset < 1){return}

      setOffset(offset-1)
      axios.request(options).then(function (response) {
        setRecipes(response.data.results)
      }).catch(function (error) {
        console.error(error);
      });
    } else {
      setOffset(offset+1)
      axios.request(options).then(function (response) {
        setRecipes(response.data.results)
      }).catch(function (error) {
        console.error(error);
      });
    }
  }

  return (
    <>
      <input type="text" onChange={e => setSearch(e.target.value)} value={search}/>
      <main className={styles.main}>
        {
        recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}/>)
      }
      </main>
      <button onClick={() => handleClick("<")}>{"<"}</button>
      <button onClick={() => handleClick(">")}>{">"}</button>
    </>
  )
}

export default App
