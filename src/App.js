import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StarWarsCharacter from './components/Character';
const App = () => {
  const [data, setData] = useState();
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(() => {
  axios.get(`[GET] https://swapi.dev/api/people`)
  .then(res => {
    // console.log(res.data)
    setData(res.data)
  })
  .catch(err => console.error(err))
}, [])


  return (
    <div className="App">
      {data && <StarWarsCharacter star={data} />}
    </div>
  );
}

export default App;
