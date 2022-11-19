import { useState } from 'react';
import styles from './SearchMovie.module.css'

export default function Movie({ onSearch }) {
  const [value, setValue] = useState('');

  const submitOnForm = event => {
    event.preventDefault();

    if (value.trim() === '') {
      alert('Please enter a movie title!');
      return;
    }

    onSearch(value);
    setValue('');
  };
  const onInputChange = event => {
    setValue(event.currentTarget.value.toLowerCase());
  };

  return (
    <form onSubmit={submitOnForm} className={styles.form}>
      <input className={styles.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search films"
        onChange={onInputChange}
        value={value}
      />
      <button type="submit" className={styles.button}> Search</button>
    </form>
    
  );
}
