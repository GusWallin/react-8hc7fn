import React from 'react';
import './style.css';
import Header from './Header.js';
import Main from './Main.js';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetch('https://swapi.dev/api/films/')
      .then((response) => response.json())
      .then((data) => setFilms(data.results));
  }, []);
  console.log(films);

  return (
    <div className="container">
      <Header />
      <Main films={films} />
    </div>
  );
}

{
  /* <h1>Hello StackBlitz!</h1>
<p>Start editing to see some magic happen :)</p> */
}
