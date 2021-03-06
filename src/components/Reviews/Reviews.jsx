// import { fetchReviews } from 'components/services/ServiceApi';
import { fetchReviews } from 'services/ServiceApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetchReviews(movieId).then(res => setReviews(res.results));
  }, [movieId]);

  return (
    // <ul>
    //   {reviews && reviews.length ? (
    //     reviews.map(review => {
    //       return (
    //         <li key={review.id}>
    //           <h3>{review.author}</h3>
    //           <p>{review.content}</p>
    //         </li>
    //       );
    //     })
    //   ) : (
    //     <h2>No reviews yet</h2>
    //   )}
    // </ul>

    <>
      {reviews && reviews.length ? (
        <ul>
          {' '}
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <h2>No reviews yet</h2>
      )}
    </>
  );
}
