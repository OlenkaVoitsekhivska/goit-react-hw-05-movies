import { useState, useEffect } from 'react';
import { fetchMoviesByKeyword } from 'components/ServiceApi/ServiceApi';
import { Link, useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [input, setInput] = useState('');
  const [moviesByKey, setMoviesByKey] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleInputChange = e => {
    setInput(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    setIsActive(true);
    event.preventDefault();

    if (input.trim() === '') {
      return;
    }
    setSearchParams({ query: input });
  };

  useEffect(() => {
    if (input === '') {
      return;
    }
    if (isActive) {
      fetchMoviesByKeyword(input).then(setMoviesByKey);
      setIsActive(false);
    }
  }, [input, isActive, moviesByKey]);

  useEffect(() => {
    let query = searchParams.get('query');
    if (query) {
      fetchMoviesByKeyword(query).then(setMoviesByKey);
    }
  }, [searchParams]);

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} value={input} />
        <button type="submit" id="submitBtn">
          Search
        </button>
      </form>
      {moviesByKey &&
        moviesByKey.map(item => {
          return (
            <li key={item.id}>
              <Link to={`${item.id}`}>{item.original_title}</Link>
            </li>
          );
        })}
    </>
  );
}
