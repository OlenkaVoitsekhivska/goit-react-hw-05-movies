// import { fetchTrending } from 'components/services/ServiceApi';
import { fetchTrending } from 'services/ServiceApi';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Trending() {
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    fetchTrending().then(setTrendingMovies);
  }, []);

  return (
    <ul>
      {trendingMovies &&
        trendingMovies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.original_title}</Link>
            </li>
          );
        })}
    </ul>
  );
}

export default Trending;
