import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import './MovieDetails.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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

  const handleDelete = () => {
    dispatch ({
      type: 'DELETE_MOVIE',
      payload: movieDetails.id
    })
    history.push('/');
  }

  // local state for the delet dialog
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      <Box mt={7}>
        <Button variant="contained" color="secondary" onClick={handleClickOpen}>Delete</Button>
      </Box> 
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to Delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button 
            onClick={() => {
              handleClose();
              handleDelete();
            }} 
            color="secondary" variant="contained" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog> 
    </div>
    </>
  )
}

export default MovieDetails;