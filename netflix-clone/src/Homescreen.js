import React from 'react';
import "./homescreen.css";
import Nav from "./Nav";
import Banner from "./Banner"
import requests from './Request';
import Row from "./Row"

const Homescreen = () => {
    return ( <div> 
        <Nav />

       <Banner />
    
        <Row 
         title="NEXFLIX ORGINALS" 
         fetchUrl={requests.fetchNetflixOriginals}
         isLargeRow
        />
        <Row 
         title="TRENDING" 
         fetchUrl={requests.fetchTrending}
        />
        <Row 
         title="TOP RATED" 
         fetchUrl={requests.fetchTopRated}
        />
        <Row 
         title="ACTION MOVIES" 
         fetchUrl={requests.fetchActionMovies}
        />
        <Row 
         title="COMEDY MOVIES" 
         fetchUrl={requests.fetchComedyMovies}
        />
        <Row 
         title="HORROR MOVIES" 
         fetchUrl={requests.fetchHorrorMovies}
        />
        <Row 
         title="ROMANCE MOVIES" 
         fetchUrl={requests.fetchRomanceMovies}
        />
        <Row 
         title="DOCUMENTARIES" 
         fetchUrl={requests.fetchDocumentaries}
        />
        

    </div>

    );
}


export default Homescreen;