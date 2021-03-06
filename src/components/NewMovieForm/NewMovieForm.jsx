import React, {useState}from 'react';
import { useDispatch } from 'react-redux';

function NewMovieForm() {
  const dispatch = useDispatch();

  // local state to store new movie info
  const [newMovieData, setNewMovieData] = useState(
    {
      title: '', 
      poster: '', 
      description: '', 
      genre: ''
    });

  /* --- Handle input changes --- */
  const titleChange = (event) => {
    setNewMovieData({...newMovieData, title: event.target.value})
  }

  const posterChange = (event) => {
    setNewMovieData({...newMovieData, poster: event.target.value})
  } 

  const descriptionChange = (event) => {
    setNewMovieData({...newMovieData, description: event.target.value})
  }

  const genreChange = (event) => {
    setNewMovieData({...newMovieData, genre: event.target.value})
  }

  /* --- Handle form submit --- */
  // on form submit, dispatch to the addNewMovie Saga
  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_NEW_MOVIE',
      payload: newMovieData
    })
  }

  return (
    <div>
      <h3>Add a New Movie</h3>
      <form onSubmit={handleFormSubmit}>
        {/* FORM INPUTS */}

        {/* Title Input */}
        <label>Movie Title:
          <input 
          type="text" 
          value={newMovieData.title} 
          onChange={titleChange} />
        </label>

        {/* Poster URL Input */}
        <label>Movie Poster (URL):
          <input 
          type="text"
          value={newMovieData.poster} 
          onChange={posterChange} />
        </label>

        {/* Description Input */}
        <label>Movie Description:
          <textarea
          value={newMovieData.description} 
          onChange={descriptionChange} />
        </label>

        {/* Dropdown for genre selector */}
        <label>Genre:
          <select name="genres" 
              value={newMovieData.genre} 
              onChange={genreChange}>
            <option value="">--Choose A Genre--</option>
            <option value="Adventure">Adventure</option>
            <option value="Animated">Animated</option>
            <option value="Biographical">Biographical</option>
            <option value="Comedy">Comedy</option>
            <option value="Disaster">Disaster</option>
            <option value="Drama">Drama</option>
            <option value="Epic">Epic</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Musical">Musical</option>
            <option value="Romantic">Romantic</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Space-Opera">Space-Opera</option>
            <option value="Superhero">Superhero</option>
          </select>
        </label>
        <br/>
        {/* Submit Button */}
        <input type="submit" value="Submit"/>
      </form>
      {/* Cancel button to go back home */}
      <button>Cancel</button>
    </div>
  )
}

export default NewMovieForm;