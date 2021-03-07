import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useHistory, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';


function Header() {
  const history = useHistory();

  // local state to control nav button colors
  const [homeColor, setHomeColor] = useState("default");
  const [addColor, setAddColor] = useState("default");

  const homeClick = () => {
    setHomeColor("primary");
    setAddColor("default");
  }

  const addClick = () => {
    setHomeColor("default");
    setAddColor("primary");
  }

  console.log('location', location);
  return (
    <div id="header-container">
      <h1 id="app-title">The Movies Saga</h1>
      
      <Button component={ Link } to="/" color={homeColor} onClick={homeClick}>
        <HomeIcon />Home
      </Button>
      
      <Button component={ Link } to="/addmovie" color={addColor} onClick={addClick}>
      <AddBoxIcon />Add Movie
      </Button>
    </div>
  )
}

export default Header;