import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';

import { fetchMovieById } from 'services/ServiceApi';
import s from './MovieDetailsView.module.css';

import { lazy, Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const Cast = lazy(() => import('components/Cast/Cast.jsx'));
const Reviews = lazy(() => import('components/Reviews/Reviews.jsx'));

export default function MovieDetailsView() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieById(movieId).then(setMovieData);
  }, [movieId]);

  const handleBackClick = () => {
    navigate(-1);
  };

  const backToHome = () => {
    navigate('/');
  };

  return (
    <div className={s.pageView}>
      {window.history.state.idx > 0 ? (
        <button
          type="button"
          className={s.backBtn}
          onClick={() => handleBackClick()}
        >
          go back
        </button>
      ) : (
        <button className={s.backBtn} onClick={backToHome}>
          to homepage
        </button>
      )}
      {movieData && (
        <>
          <div className={s.moviePage}>
            <img
              src={
                movieData.backdrop_path
                  ? `https://image.tmdb.org/t/p/original${movieData.backdrop_path}`
                  : 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'
              }
              alt=""
              width={300}
            />
            <div className={s.movieInfoWrap}>
              <h1>
                {movieData.original_title}({movieData.release_date.slice(0, 4)})
              </h1>
              <p>UserScore: {movieData.vote_average * 10}%</p>
              <h2>Overview</h2>
              <p>{movieData.overview}</p>
              <h3>Genres</h3>
              <p>{movieData.genres.map(genre => genre.name).join(', ')}</p>
            </div>
          </div>
          {/* <div> */}
          <div className={s.additionalInfo}>
            <h2>Additional information</h2>
            <ul>
              <li>
                <NavLink to="cast">Cast</NavLink>
              </li>

              <li>
                <NavLink to="reviews">Reviews</NavLink>
              </li>
            </ul>
          </div>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Routes>
          </Suspense>
          {/* </div> */}
        </>
      )}
    </div>
  );
}
