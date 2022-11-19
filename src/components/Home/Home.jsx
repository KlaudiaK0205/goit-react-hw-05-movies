import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrending } from '../API/API';
import styles from './Home.module.css';

  const Home = () => {
    const [movies, setMovies] = useState(null);
  
    useEffect(() => {
      const getData = async () => {
        const data = await getTrending();
        setMovies(data);
      };
      getData();
    }, []);

  return (
    <>
      <h1 className={styles.homeTitle}>Trending Today!</h1>
      <ul className={styles.filmList}>
        {movies?.map(movie => (
          <li key={movie.id} className={styles.filmListItem}>
            <Link to={`/movies/${movie.id}`} className={styles.filmLink}>
            <img
              style={{ width: 200 }}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="poster"
              width="200"
            />
              <h3 className={styles.filmTitle}>{movie.original_title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Home;
