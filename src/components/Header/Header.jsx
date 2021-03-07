import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';


function Header() {
  const history = useHistory();
  const dispatch = useDispatch();

  // // local state to control nav button colors
  // const [homeColor, setHomeColor] = useState("default");
  // const [addColor, setAddColor] = useState("default");

  // let { id } = useParams();
  // if(id === "addmovie") {
    
  //   setAddColor("primary");
  // }

  // console.log('id', id);

  // const homeClick = () => {
  //   setHomeColor("primary");
  //   setAddColor("default");
  // }

  // const addClick = () => {
  //   setHomeColor("default");
  //   setAddColor("primary");
  // }

  // on 'back to to list' click,
  // clear the details reducer
  // so that the next movie clicked doesn't load weird
  const clearDetailsReducer = () => {
    dispatch ({
      type: 'CLEAR_DETAILS'
    })
  }

  console.log('location', location);
  return (
    <div id="header-container">
      <h1 id="app-title">The Movies Saga</h1>
      
      <Box m={1}>
        <Button component={ Link } to="/" onClick={clearDetailsReducer}>
          <HomeIcon />Home
        </Button>
      
        <Button component={ Link } to="/addmovie" >
          <AddBoxIcon />Add Movie
        </Button>
      </Box>
    </div>
  )
}

export default Header;