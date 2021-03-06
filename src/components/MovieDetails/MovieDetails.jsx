import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MovieDetails() {

  // grab the single movie details from redux store
  const movieDetails = useSelector(store => store.movieDetails);
  
  return (
    <div>
      <h3>Details View</h3>
      <h4>Title: {movieDetails.title}</h4>
    </div>
  )
}

export default MovieDetails;