import { useState, useEffect } from 'react';
import * as API from '../API/API';

export default function Reviews({ id }) {
  const [review, setRewiev] = useState(null);

  useEffect(() => {
    API.fetchReviews(id).then(setRewiev);
  }, [id]);

  return (
    <ul>
      {review &&
        review.map(({ id, author, content }) => (
          <li key={id}>
            <h2>{author}</h2>
            <p>{content}</p>
          </li>
        ))}
    </ul>
  );
}
