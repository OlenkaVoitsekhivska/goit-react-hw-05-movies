import React from 'react';
import Navigation from './Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import Trending from './Navigation/Trending/Trending';
import MovieDetailsView from './MovieDetailsView/MovieDetailsView';
import Cast from './Cast/Cast';

export const App = () => {
  return (
    <>
    <Navigation />
 
     

      <Routes>
       <Route path="/" element={<Trending />} />
        <Route path="movies" element={<h1>Gunna place movies here</h1>} />
        {/* <Route path="movies/:movieId" element={<MovieDetailsView />}/> */}
        <Route path="movies/:movieId/*" element={<MovieDetailsView />}/>
     </Routes>
     </>  

  );
};
