import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'


function NavBar(props) {
  return (
    <div className="nav-bar">
        <Link to="/movies"><img alt="flatiron tomatoes" src="tomatoes.png"/></Link>
        <div>
          <input  placeholder="Search..."/>
          <Button color="default"><div>Submit</div></Button>
        </div>
        <Link onClick={() => {props.setUser(null); localStorage.removeItem('token') }} to="/login"><Button color="default"><div>{props.user ? "Logout" : "Login"}</div></Button></Link>
        <Link to="/signup"><Button color="default" ><div>Sign Up</div></Button></Link>
        <Link to="/profile">
          <Button color="default">
            <div><span aria-label="person" role="img">{props.user && props.user.username} 👤</span></div>
          </Button>
        </Link>
    </div>
  );
}

export default NavBar;
