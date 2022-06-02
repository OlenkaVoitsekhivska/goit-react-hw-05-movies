import { React } from 'react';

import Navigation from 'components/Navigation/Navigation';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { lazy, Suspense } from 'react';

import Loader from 'components/Loader/Loader';

const TrendingView = lazy(() => import('views/TrendingView/TrendingView.jsx'));
const MovieDetailsView = lazy(() =>
  import('components/MovieDetailsView/MovieDetailsView.jsx')
);
const MoviesPageView = lazy(() =>
  import('views/MoviesPageView/MoviesPageView.jsx')
);

export const App = () => {
  return (
    <>
      <Navigation />
      <ToastContainer autoClose={2000} />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="movies" element={<MoviesPageView />} />
          <Route path="movies/:movieId/*" element={<MovieDetailsView />} />
          <Route path="/" element={<TrendingView />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  );
};
