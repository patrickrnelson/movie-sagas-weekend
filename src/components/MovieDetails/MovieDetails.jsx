import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieDetails.css'

function MovieDetails() {
  const history = useHistory();
  
  // grab the single movie details from redux store
  const movieDetails = useSelector(store => store.movieDetails);
  
  // Tried local state, but couldn't get it to work
  let movieGenres = movieDetails.all_genres || [];

  return (
    <div className="details-container">
      <h2 className="movie-detail-title">{movieDetails.title}</h2>
      <ul id="genre-list">
        {movieGenres.map((genre) => {
          return (
          <li>{genre}</li>
          )
        })}
      </ul>
      <img className="detail-image" src={movieDetails.poster} />
      <div className="description-container">
        <p className="description-text">{movieDetails.description}</p>
      </div>
      <button onClick={() => history.push('/')}>Back To List</button>
    </div>
  )
}

export default MovieDetails;