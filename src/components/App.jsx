import React from 'react';
import Navigation from './Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
// import Trending from './Navigation/Trending/Trending';
// import MovieDetailsView from './MovieDetailsView/MovieDetailsView';
// import MoviesPage from './Navigation/MoviesPage/MoviesPage';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';

const Trending = lazy(()=>import('./Navigation/Trending/Trending.jsx'));
const MovieDetailsView = lazy(()=>import('./MovieDetailsView/MovieDetailsView.jsx'));
const MoviesPage = lazy(()=>import('./Navigation/MoviesPage/MoviesPage.jsx'));

export const App = () => {

  console.log(window.location.href)
  return (
    <>
    <Navigation />
    <Suspense fallback ={<Loader />}>
      <Routes>
       <Route path="/" element={<Trending />} />
        <Route path="movies" element={<MoviesPage/>} />
        <Route path="movies/:movieId/*" element={<MovieDetailsView />}/>
        {/* <Route path="*" element={}/> */}
     </Routes>
     </Suspense>
     </>  
  );
};
