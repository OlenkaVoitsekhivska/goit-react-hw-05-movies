import { fetchTrending, fetchMoviesByKeyword, fetchMovieById } from "components/ServiceApi/ServiceApi"
import { useEffect, useState } from "react";
import { Link, useMatch} from "react-router-dom";


function Trending (){


const [trendingMovies, setTrendingMovies] = useState(null);

useEffect(()=>{
    fetchTrending().then(setTrendingMovies);
},[])
// const {url} = useMatch();
// console.log(url)
    return (
        <ul>
            {trendingMovies&&trendingMovies.map(movie=>{
                // return movie.original_title;
                return <li key={movie.id}>
                    <Link to={`movies/${movie.id}`}>{movie.original_title}</Link>
                    </li>
            })}
        </ul>
    )
}

export default Trending;