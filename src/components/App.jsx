import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from './Navigation/Navigation';


const Home = lazy(() => import('./Home/Home'));
const Movie = lazy(() => import('./Movie/Movie'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="*" element={<h1>No page, go back</h1>} />
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movie />} />
          <Route path="movies/:movieId/*" element={<MovieDetails />} />
        </Routes>
      </Suspense>
    </div>
  );
};