import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import {  Routes, Route,useParams } from "react-router-dom";
import { fetchCast, fetchMovieById, fetchReviews } from "components/ServiceApi/ServiceApi";
import Cast from "components/Cast/Cast";
import Reviews from "components/Reviews/Reviews";

export default function MovieDetailsView(){
const {movieId} = useParams();

const [movieData, setMovieData] = useState();

useEffect(()=>{
fetchMovieById(movieId).then(setMovieData);
},[movieId]);


    return(
    <>
 {movieData&&
 <>
 <img src={`https://image.tmdb.org/t/p/original${movieData.backdrop_path}`} alt="" width={300} />
<h1>{movieData.original_title}({movieData.release_date.slice(0,4)})</h1>
<p>UserScore: {movieData.vote_average*10}%</p>
<h2>Overview</h2>
<p>{movieData.overview}</p>
<h3>Genres</h3>
<p>{movieData.genres.map(genre=>genre.name)}</p>
<div>
    <h2>Additional information</h2>
    <ul>
        <li>
<NavLink  to="cast">Cast</NavLink>
        </li>
        
        <li>
            <NavLink to="reviews">Reviews</NavLink>
        </li>
    </ul>
    <Routes>
<Route path="cast" element={<Cast />}/>
<Route path="reviews" element={<Reviews/>}/>
</Routes>
</div>
</>
}

</> 
    )
}