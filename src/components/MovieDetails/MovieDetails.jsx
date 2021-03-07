import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import './MovieDetails.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';

function MovieDetails() {
  const history = useHistory();
  const dispatch = useDispatch();
  
  // mat ui back button style
  const style = {
    margin: 0,
    bottom: 'auto',
    left: 47,
    top: 125,
    right: 'auto',
    position: 'absolute',
};
  
  // grab the single movie details from redux store
  const movieDetails = useSelector(store => store.movieDetails);
  
  // so the map function has something to start with if movieDetails isn't ready
  // Tried local state, but couldn't get it to work
  let movieGenres = movieDetails.all_genres || [];

  // on 'back to to list' click,
  // clear the details reducer
  // so that the next movie clicked doesn't load weird
  const clearDetailsReducer = () => {
    dispatch ({
      type: 'CLEAR_DETAILS'
    })
  }

  return (
    <>
    <Button component={ Link } to="/" color="primary" style={style} onClick={clearDetailsReducer}>
      <ArrowBackIcon />  Back To List
    </Button>
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
    </div>
    </>
  )
}

export default MovieDetails;