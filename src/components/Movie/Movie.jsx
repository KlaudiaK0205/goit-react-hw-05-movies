import { useState, useEffect } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import SearchMovie from '../SearchMovie/SearchMovie';
import * as API from '../API/API';
import styles from './Movie.module.css';

const Movie = () => {
  const [film, setFilm] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();
  const location = useLocation();

  const searchFilm = value => {
    setSearchParam({ query: value });
  };

  useEffect(() => {
    const query = searchParam.get('query') ?? '';
    if (query) {
      API.fetchMovieQuery(query).then(setFilm);
    }
  }, [searchParam]);

  return (
    <>
      <SearchMovie onSearch={searchFilm} />

      {film.length > 0 ? (
        <div className={styles.movieBox}>
          {film.map(({ title, id }) => (
            <Link key={id} to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
          ))}
        </div>
      ) : (
        <p className={styles.text}>Please type movie name.</p>
      )}
    </>
  );
};

export default Movie;
