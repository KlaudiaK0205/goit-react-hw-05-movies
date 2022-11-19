import { useState, useEffect } from 'react';
import * as API from '../API/API';
import styles from './Cast.module.css';

export default function Cast({ id }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    API.fetchCast(id).then(setCast);
  }, [id]);

  return (
    <>
      {cast && (
        <ul className={styles.list}>
          {cast?.map(({ id, profile_path, name }) => (
            <li key={id} className={styles.item}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : 'https://upload.wikimedia.org/wikipedia/commons/b/ba/No_image_available_400_x_600.svg'
                }
                alt={name}
                width="100"
              />
              <p className={styles.text}>{name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
