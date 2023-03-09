import React from 'react';
import Filmcard from './Filmcard';

export default function Main(props) {
  let title = props.films.map((film) => film.title);
  console.log(title);
  return (
    <div className="Main--container">
      <h1> Search for movie </h1>
      <input className="searchBox" type="text" placeholder="Text"></input>
      <button type="submit">SEARCH</button>
      <section>
        <Filmcard />
        <p>{title}</p>
      </section>
    </div>
  );
}
