import React, { useEffect, useState } from 'react';
import axios from "./axios";
import requests from './Request';
import "./Banner.css"

function Banner() {

    const [movies, setMovies] = useState([]) ;

    //const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(()=> {
     async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovies(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1) 
            ]
        );
        return request;
     }
        
       fetchData();
    }, []);

    console.log(movies)

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "...." : string ;

    }


  return (
    <header
     className='banner' 
     
    > 
      

    <div className="banner_contents">
    
    <img className='poster' src={`https://image.tmdb.org/t/p/w500/${movies?.backdrop_path}`} alt={movies?.title} />
    
    <div className="blend">
         <h1 className="banner_title">{movies?.title || movies?.name || movies?.original_title}</h1>
        <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_descrp"> {truncate(movies?.overview, 200)}</h1>
         </div>
        
    </div>
    
    <div className="banner--fadebutton"></div>
    </header>
  )
}

export default Banner
