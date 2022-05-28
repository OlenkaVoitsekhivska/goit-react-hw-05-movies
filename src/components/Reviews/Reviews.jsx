import { fetchCast, fetchMovieById, fetchReviews } from "components/ServiceApi/ServiceApi";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Reviews (){

    const {movieId} = useParams();

    const [reviews, setReviews] = useState();
    useEffect(()=>{
        fetchReviews(movieId).then(res=>setReviews(res.results));
    },[movieId]);
    console.log(reviews)

    return (
        <ul>
                {reviews&&reviews.map(review=>{
                    return <li key={review.id}>
                        <h3>{review.author}</h3>
                        <p>{review.content}</p>
                    </li>
                })}
            </ul>
    )
}