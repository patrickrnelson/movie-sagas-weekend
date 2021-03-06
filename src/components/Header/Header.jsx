import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom'
import AddBoxIcon from '@material-ui/icons/AddBox';

function Header() {

  return (
    <div id="header-container">
      <h1 id="app-title">The Movies Saga</h1>
      
      <Button component={ Link } to="/">
        <HomeIcon />
      </Button>
      
      <Button component={ Link } to="/addmovie">
      <AddBoxIcon />
      </Button>
    </div>
  )
}

export default Header;