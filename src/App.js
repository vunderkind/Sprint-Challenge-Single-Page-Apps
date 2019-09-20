import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import './App.css';
import axios from 'axios';
import WelcomePage from './components/WelcomePage';
import Heading from './components/Heading';
import Names from './components/Names';
import styled from 'styled-components';
import SearchForm from './components/SearchForm';

export const App = () => {
  const [People, setPeople] = useState([]);
  
  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(response  => {
    //   for (let key in response.data.results) {
    //     setPeople(response.data.results[key])
    //     console.log(key)

    // }
    setPeople(response.data.results)
    }, [])
  
    
    .catch(error => {
        console.log("Oops - You broke Rick and Morty!", error);
    })
  }, []);

  const Structure = styled.div`
  width: 80vw;
  margin: 0 auto;
  `

  //defining argument returned by Names via the Nameprop
  function NameProp() {
  return (<div>
  <Heading/>
  <Structure>
  {People.map((people) =>
          <Names
            image={people.image}
            name={people.name}
            origin={people.origin.name}
            gender={people.gender}
            status={people.status}
            />
          )}
  </Structure>
  </div>)
  }

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/`)
      .then(response => response.json())
      .then(jsonResponse => {
      });
  }, []);


  const search = searchValue => {

    fetch(`https://rickandmortyapi.com/api/character/?name=${searchValue}`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setPeople(jsonResponse.Search);
        } else {
          console.log('Something is wrong');
        }
      });
  	};


  return (
    <Router>
      <div>
        <nav>
          <SearchForm search={search} />
          <ul>
            <li>
              <Link to="/">Welcome</Link>
            </li>
            <li>
              <Link to="/characters/">Characters</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/characters/" component={NameProp} />
      </div>
    </Router>
    
  );
}


export default App;
