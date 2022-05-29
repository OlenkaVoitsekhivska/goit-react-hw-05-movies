import { fetchCast } from "components/ServiceApi/ServiceApi";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Cast() {
  const { movieId } = useParams();

  const [credits, setCredits] = useState();
  useEffect(() => {
    fetchCast(movieId).then(res => setCredits(res.cast));
  }, [movieId]);


  return (
    <ul>
      {credits &&
        credits.map(actor => {
          return (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                alt=""
                width={300}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          );
        })}
    </ul>
  );
}