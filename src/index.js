import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('ADD_NEW_MOVIE', addNewMovie)
    yield takeEvery('FETCH_SINGLE_MOVIE', fetchSingleMovie)
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

function* fetchSingleMovie(action) {
  // get one movie from the DB
  try {
      const singleMovie = yield axios.get(`/api/movie/${action.payload}`);
      console.log('get single movie:', singleMovie.data);
      yield put({ type: 'SET_MOVIE_DETAILS', payload: singleMovie.data[0] });

  } catch {
      console.log('get all error');
  }
      
} // end fetchSingleMovie

function* addNewMovie(action) {
  console.log('action.payload', action.payload);
  // add a new movie to the DB
  try {
    yield axios.post('/api/movie', action.payload);
    yield put({ 
      type: 'FETCH_MOVIES'
    })
  }
  catch (err) {
    console.log('Error in Saga POST', err);
  }
} // end addNewMovie

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store a single movie's details
const movieDetails = (state = {}, action) => {
  switch (action.type) {
    case 'SET_MOVIE_DETAILS':
      return action.payload;
    default:
      return state;
  }
}

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieDetails
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
