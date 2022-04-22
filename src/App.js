import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StarWarsCharacter from './components/Character';
function App () {
  const [characters, setCharacters] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(() => {
  axios.get(`https://swapi.dev/api/people`)
  .then(res => {
    console.log(res.data.results)
    setCharacters(res.data.results)
  })
  .catch(err => console.error(err))
}, [])


  return (
    <div className="App">
    {
      characters.map((character, index)=> (
        <article key={`app-characters-map${index}-${character.name}`}>
          <h2>{character.name}</h2>
          <img src={character.homeworld} />
          

        </article>
      ))
    }
    </div>
  );
}

export default App;
