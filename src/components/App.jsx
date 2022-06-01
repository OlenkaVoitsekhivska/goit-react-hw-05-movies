import React from 'react';
import Navigation from './Navigation/Navigation';
import { Route, Routes, Navigate} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Trending from './Navigation/Trending/Trending';
// import MovieDetailsView from './MovieDetailsView/MovieDetailsView';
// import MoviesPage from './Navigation/MoviesPage/MoviesPage';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';

const Trending = lazy(()=>import('./Navigation/Trending/Trending.jsx'));
const MovieDetailsView = lazy(()=>import('./MovieDetailsView/MovieDetailsView.jsx'));
const MoviesPage = lazy(()=>import('./Navigation/MoviesPage/MoviesPage.jsx'));


export const App = () => {


  return (

    <>
    <Navigation />
    <ToastContainer autoClose={2000} />
    <Suspense fallback ={<Loader />}>
    
      <Routes>
        <Route path="movies" element={<MoviesPage/>} />
        <Route path="movies/:movieId/*" element={<MovieDetailsView />}/>
        <Route path="/" element={<Trending />} />
        <Route path="*" element={<Navigate to="/" replace/>}/>
     </Routes>
    
     </Suspense>
     
     </>  
     
  );
};
