import React from 'react';
import Filmcard from './Filmcard';

export default function Main(props) {


  const filmElements = props.films.map((film) => {
    return (
      <Filmcard
        title={film.title}
        crawl={film.opening_crawl}
        director={film.director}
        release={film.release_date}
      />
    );
  });

/*   let title = props.films.map((film) => {
    return film.title;
  });
  let crawl = props.films.map((film) => {
    return film.opening_crawl;
  });
  let releaseDate = props.films.map((film) => {
    return film.release_date;
  }); */
  //let title = props.films.map((film)) => film.title);
  // console.log(title[0]);

  return (
    <div className="Main--container">
      <h1> Search for movie </h1>
      <input className="searchBox" type="text" placeholder="Text"></input>
      <button type="submit">SEARCH</button>
      <section>
        {filmElements}
      </section>
    </div>
  );
}
