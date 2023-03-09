import React from 'react';

export default function Filmcard(props) {
  console.log(props);
  return (
    <div className="filmcard">
      <p className="filmcard--title">Title of Movie: {props.title}</p>
      <p className="filmcard--realeasedate">Releasedate: {props.release}
      </p>
      <p className="filmcard--realeasedate">Director: {props.director}
      </p>
      <p className="filmcard--crawl">Main Crawl of movie: {props.crawl}</p>
    </div>
  );
}
