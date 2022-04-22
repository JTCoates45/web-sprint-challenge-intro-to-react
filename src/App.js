import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from "styled-components"
function App () {
  const [characters, setCharacters] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here. blah blah blad

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any. blah
useEffect(() => {
  axios.get(`https://swapi.dev/api/people`)
  .then(res => {
    // console.log(res.data.results)
    setCharacters(res.data.results)
  })
  .catch(err => console.error(err))
}, [])

const Container = styled.section`
display:flex;
justify-content:center;
;`
const Name = styled.h1`
color: Green;`

  return (
    <div className="App">
    {
      characters.map((character, index)=> (
        <article key={`characters-map${index}-${character.name}`}>
          <Container>
          <Name>
          <h1>Name: {character.name}</h1>
          </Name>
          <p>Height: {character.height}</p>
          <p>HairColor: {character.hair_color}</p>
          <p>EyeColor: {character.eye_color}</p>
          <p>Birth Year: {character.birth_year}</p>
          <p>Gender: {character.gender}</p>
          </Container>
        </article>
      ))
    }
    </div>
  );
}

export default App; 

