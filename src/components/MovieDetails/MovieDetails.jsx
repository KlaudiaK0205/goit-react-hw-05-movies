import { Route, Routes, NavLink, Link, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState, lazy } from 'react';
import * as API from '../API/API';
import styles from './MovieDetails.module.css'

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const location = useLocation();

  useEffect(() => {
    API.fetchFilmById(movieId).then(setFilm);
  }, [movieId]);

  const backBtn = location.state?.from ?? '/';

  return (
    <>
      <Link className={styles.backBtn}to={backBtn}>Back</Link>
      {film && (
        <div className={styles.movieInfo}>
          <div>
            {film.poster_path ? (
              <img
                className={styles.imgDescription}
                src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                alt={film.title}
              />
            ) : (
              <img
                src={`https://tl.rulate.ru/i/book/19/10/18925.jpg`}
                alt={film.title}
              />
            )}
          </div>
          <div className={styles.movieDescription}>
            <h1>{film.title}</h1>
            <p>User score: {film.vote_average * 10} %</p>
            <h2>Overwiev</h2>
            <p>{film.overview}</p>
            <h3>Genres</h3>
            <p>{film.genres.map(genre => genre.name).join(', ')}</p>
            <h3 className={styles.additionalInfo}>Additional information</h3>
              <NavLink to="cast">Cast</NavLink>
              <NavLink to="review">Reviews</NavLink>
          </div>
        </div>
      )}
      <div className={styles.castBox}>
        <Routes>
        <Route path="cast" element={<Cast id={movieId} />} />
        <Route path="review" element={<Reviews id={movieId} />} />
      </Routes>
      </div>
    </>
  );
};

export default MovieDetails;
