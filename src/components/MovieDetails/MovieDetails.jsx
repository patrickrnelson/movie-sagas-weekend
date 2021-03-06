import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieDetails() {
  const history = useHistory();
  
  // grab the single movie details from redux store
  const movieDetails = useSelector(store => store.movieDetails);
  
  // Tried local state, but couldn't get it to work
  let movieGenres = movieDetails.all_genres || [];

  return (
    <div>
      <h3>Details View</h3>
      <h4 className="movie-detail-title">Title: {movieDetails.title}</h4>
      <p>Genres:</p>
      <ul>
        {movieGenres.map((genre) => {
          return (
          <li>{genre}</li>
          )
        })}
      </ul>
      <img src={movieDetails.poster} />
      <p>{movieDetails.description}</p>
      <button onClick={() => history.push('/')}>Back To List</button>
    </div>
  )
}

export default MovieDetails;