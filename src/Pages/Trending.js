import React, { useState, useEffect } from 'react'
import Movie from './TMDB data/Movie';
//https://image.tmdb.org/t/p/w500/

const Featured_Api = "https://api.themoviedb.org/3/trending/movie/week?api_key=6a5a570bdfc72c96af78167fc6382353";

const Image_Api = "//https://image.tmdb.org/t/p/w500/";

const Trending = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(' ');
  useEffect(() => {
    fetch(Featured_Api).then((res) => res.json()).then((data) => {
      console.log(data);
      setMovies(data.results);
    });
  }, []);

  const handleOnSubmit = () => {
  

    fetch(Featured_Api)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setMovies(data.results);
    });
  };

  const handleOnSubmit2 = () => {
    fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=6a5a570bdfc72c96af78167fc6382353")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setMovies(data.results);
    });
  }
  
  return (
    <>
    <div className='header'>
       
          <label className="trending-label" for="category">Category:</label>
          <input type="radio" name="value" onClick={handleOnSubmit} id="one" /><label className="week">Week</label> 
          
          <input type="radio" name="value" onClick={handleOnSubmit2} id="two" /><label className='week' id="Day">Day</label>
     
      </div>  

      <div className='movie-container'>

        {movies.length > 0 && movies.map(item => {
          return <Movie key={item.id} {...item} />
        })}
      </div>
    </>
  );

};

export default Trending;
