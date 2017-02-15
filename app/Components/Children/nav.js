import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.

 */

 const style = {
  height: 36,
  margin: 12,
};

const position = {
  position: 'fixed',
}


const Nav = () => (
  <AppBar
   
   children={

     
    <div> 
     
   <Link to="/"> <RaisedButton label="Log Out" secondary={true}  style={style}  /></Link>
     
      
   </div>

    
  }

  />
);

export default Nav;