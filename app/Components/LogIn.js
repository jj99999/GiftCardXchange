import React from 'react';
import darkBaseTheme from '../../node_modules/material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from '../../node_modules/material-ui/styles/MuiThemeProvider';
import getMuiTheme from '../../node_modules/material-ui/styles/getMuiTheme';
// import AppBar from '../../node_modules/material-ui/AppBar';
// // import MobileTearSheet from '../../node_modules/material-ui/MobileTearSheet';
// import Avatar from '../../node_modules/material-ui/Avatar';
import {List, ListItem} from '../../node_modules/material-ui/List';
import Subheader from '../../node_modules/material-ui/Subheader';
import Divider from '../../node_modules/material-ui/Divider';
// import CommunicationChatBubble from '../../node_modules/material-ui/svg-icons/communication/chat-bubble';
// import ActionSwapHoriz from '../../node_modules/material-ui/svg-icons/action/swap-horiz';
// import ActionSwapVert from '../../node_modules/material-ui/svg-icons/action/swap-vert';
// import ActionCardGiftCard from '../../node_modules/material-ui/svg-icons/action/card-giftcard';
// // import FontIcon from 'material-ui/FontIcon';
// // import Avatar from '../../node_modules/material-ui/Avatar';
// import MobileTearSheet from '../MobileTearSheet';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';


const style = {

  color: 'teal',
  marginRight: 98,
}

const LogIn = () => (




 <Card className="container">
 <form className="create-form" action="/login" method="POST">




<div className="row">
 <div className="col-md-4">

 </div>

<div className="col-md-4">

<h1 className="card-heading" style={style}>Log In</h1>


<div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          // errorText={errors.email}
          // onChange={onChange}
          // value={user.email}
        />
      </div>

<div className="field-line">
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          // onChange={onChange}
          // errorText={errors.password}
          // value={user.password}
        />
      </div>


 <div className="button-line">
        <RaisedButton type="submit" label="Log In" primary />
      </div>

  </div>
 <div className="col-md-4">


 </div>
 </div>

  </form>
 </Card>


  );

export default LogIn;