import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {
    const dispatch = useDispatch();
    const history = useHistory();
    
    // grab all movies from redux store
    const movies = useSelector(store => store.movies);

    // on load, fetch movies from the DB
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

  // on image click, grab the single movie details from DB
  // store data in redux so we can use in the MovieDetailsPage
  const handleImageClick = (movieId) => {
    console.log('handleImageClick');
    dispatch({ 
      type: 'FETCH_SINGLE_MOVIE',
      payload: movieId 
    });
    // on image click, direct user to a details page
    toDetailsPage(movieId);
  }


  const toDetailsPage = (movieId) => {
    history.push(`/details/${movieId}`)
  }

  
    return (
        <main>
            <section className="movies">
              {/* map through the movies date from redux store */}
                {movies.map(movie => {
                    return (
                        <div 
                          key={movie.id} 
                          className="movie-image-div"
                          onClick={() => handleImageClick(movie.id)}>
                            <img className="list-image" src={movie.poster} alt={movie.title} />
                            <h3>{movie.title}</h3>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;