import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import NewMovieForm from '../NewMovieForm/NewMovieForm';
import Header from '../Header/Header'

function App() {
  return (
    <div className="App">
      <Router>   
        {/* Header */}
        <Header />
        {/* Homepage */}
        <Route path="/" exact>
          <MovieList />
        </Route>
        {/* Details page */}
        <Route path="/details">
          <MovieDetails />
        </Route>
        {/* Add Movie page */}
        <Route path="/addmovie" exact>
          <NewMovieForm />
        </Route>
      </Router>
    </div>
  );
}


export default App;
