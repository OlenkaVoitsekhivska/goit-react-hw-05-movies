import { useState, useEffect } from 'react';
import { fetchMoviesByKeyword } from 'components/ServiceApi/ServiceApi';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function MoviesPage() {
  const [input, setInput] = useState('');
  const [moviesByKey, setMoviesByKey] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  let navigate = useNavigate();

  const handleInputChange = e => {
    setInput(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    setIsActive(true);
    event.preventDefault();

    if (input.trim() === '') {
      toast.error('Enter your search query');
      return;
    }
    setSearchParams({ query: input });
  };

  useEffect(() => {
    if (input === '') {
      return;
    }
    if (isActive) {
      setIsActive(false);
    }
  }, [input, isActive]);

  useEffect(() => {
    let query = searchParams.get('query');
    if (query) {
      fetchMoviesByKeyword(query).then(res => {
        if (res.length === 0) {
          toast.error("Didn't find anything matching your query");
          navigate('./');
          return;
        }
        setMoviesByKey(res);
        setInput(''); //clearing input after data's been set
      });
    }
  }, [navigate, searchParams]);

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
