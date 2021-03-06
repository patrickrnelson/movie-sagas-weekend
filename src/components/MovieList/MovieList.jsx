import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'
import MovieDetails from '../MovieDetails/MovieDetails';

function MovieList() {
    const dispatch = useDispatch();
    const history = useHistory();
    
    // grab all movies from redux store
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

  // on image click, grab the single movie details from DB
  // store data in redux
  const handleImageClick = (movieId) => {
    console.log('handleImageClick');
    dispatch({ 
      type: 'FETCH_SINGLE_MOVIE',
      payload: movieId 
    });
    toDetailsPage(movieId);
  }

  const toDetailsPage = (movieId) => {
    history.push(`/details/${movieId}`)
  }

  // <Button component="Link" to="/addmovie" <-- to use a button as a link
    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div 
                          key={movie.id} 
                          className="movie-image-div"
                          onClick={() => handleImageClick(movie.id)}>
                            <img src={movie.poster} alt={movie.title} />
                            <h3>{movie.title}</h3>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;