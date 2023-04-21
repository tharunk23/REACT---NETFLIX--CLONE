import axios from './axios';
import React, { useEffect, useState } from 'react';
import requests from './Request';
import "./row.css"

const BASE_URL = 'https://api.themoviedb.org/3';

function Row({ title, fetchUrl, isLargeRow = false}) {
     const [movies, setMovies] = useState([]);

     

     useEffect(()=> {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
     }, [fetchUrl] ) ;

     console.log(movies);


  return (
    <div className='row'> 
    <h2>{title}</h2>

    <div className="row_posters">
    {movies.map((movie, id) => ( 
        <img  className='row__poster' src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie?.title} />
    )
       
    )

}
    </div>

      
    </div>
  );
}

export default Row
