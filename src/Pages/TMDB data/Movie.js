import React from "react";
const Img_Api = "https://image.tmdb.org/t/p/w500/";

const setVoteClass = (vote) => {
    if(vote>=8)
    {
        return "green";
    }else if(vote>=6)
    {
        return "orange";
    }else{
        return "red";
    }
};

const Movie = ({title,poster_path,overview,vote_average}) => {
    return(
    <div className="movie">
           <img src={Img_Api + poster_path} alt = {title} />
           <div className="movie-info">
               <h3>{title}</h3>
               <span className={`tag ${setVoteClass(vote_average)}`} >{vote_average}</span>
            </div>    
            <div className="movie-hover">
               <h3>Overview : </h3>
               <p> {overview} </p> 
            </div>
    </div> );
}   

export default Movie;