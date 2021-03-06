import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MovieDetails() {

  // on load, grab the single movie details from DB
  useEffect(() => {
    dispatch({ 
      type: 'FETCH_MOVIES',
      payload: '' 
    });
}, []);

  return (
    <>
    </>
  )
}

export default MovieDetails;