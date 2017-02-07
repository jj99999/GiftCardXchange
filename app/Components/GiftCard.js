import React from 'react';
import darkBaseTheme from '../../node_modules/material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from '../../node_modules/material-ui/styles/MuiThemeProvider';
import getMuiTheme from '../../node_modules/material-ui/styles/getMuiTheme';
import AppBar from '../../node_modules/material-ui/AppBar';
// import MobileTearSheet from '../../node_modules/material-ui/MobileTearSheet';
import Avatar from '../../node_modules/material-ui/Avatar';
import {List, ListItem} from '../../node_modules/material-ui/List';
import Subheader from '../../node_modules/material-ui/Subheader';
import Divider from '../../node_modules/material-ui/Divider';
import CommunicationChatBubble from '../../node_modules/material-ui/svg-icons/communication/chat-bubble';
import ActionSwapHoriz from '../../node_modules/material-ui/svg-icons/action/swap-horiz';
import ActionSwapVert from '../../node_modules/material-ui/svg-icons/action/swap-vert';
import ActionCardGiftCard from '../../node_modules/material-ui/svg-icons/action/card-giftcard';
// import FontIcon from 'material-ui/FontIcon';
// import Avatar from '../../node_modules/material-ui/Avatar';
import MobileTearSheet from '../MobileTearSheet';

const iconStyles = {
	
    color: 'white',

};


const GiftCard = () => (
	<div>
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <AppBar title="My AppBar" />      
  </MuiThemeProvider>
 
  <header id="top" className="header"> 
    <div className="text-vertical-center">
     <h1>GEt the Gift Card that You Want</h1>
    

      <a href="#about" className="btn btn-dark btn-lg">Find Out More</a>
    </div>
   </header>

  <section id="services" className="services bg-primary">
  <div className="container">
    <div className="row">
      <div className="col-md-6 ">
     <h2 className="add">Keep track of any gift card</h2>

 <h4>Have a holiday gift card to a store you never shop at? Wouldn't it be nice to find a marketplace where you can get something you want? Oh wait, you can!</h4>
      </div>
      <div className="col-md-3">

      <MobileTearSheet>
    <List>
    <ListItem
      disabled={true}
      primaryText="Grace"
      leftAvatar={<Avatar src="http://www.material-ui.com/images/uxceo-128.jpg" />}
      rightIcon={<ActionCardGiftCard
      />}
   />
   <ListItem
      disabled={true}
      primaryText="Brendan"
      leftAvatar={<Avatar src="http://www.material-ui.com/images/ok-128.jpg" />}
      rightIcon={<ActionCardGiftCard
      />}

   />
   </List>
   </MobileTearSheet>

      </div>
     <div className="col-md-3">

      </div>
    <div className="row">
    <div className="col-md-6">

    <h2>Exchange for gift cards you don't want for people who do want them.</h2>
  
    <h4 className="exchange">Go to the marketplace, take unwanted your unwanted cards, and get the ones that you've secretly always wanted but would never tell your gift givers.</h4>
    
   </div>
    <div className="col-md-3">

    <MobileTearSheet>
    <List>
    <ListItem
      disabled={true}
      primaryText="Grace"
      leftAvatar={<Avatar src="http://www.material-ui.com/images/uxceo-128.jpg" />}
      // rightIcon={<ActionCardGiftCard
      // />}
   />
<ListItem
      disabled={true}
     leftIcon={<ActionSwapVert/>}
      
   />

   <ListItem
      disabled={true}
      primaryText="Brendan"
      leftAvatar={<Avatar src="http://www.material-ui.com/images/ok-128.jpg" />}
   />
   </List>
   </MobileTearSheet>
    </div>

    <div className="col-md-3">

    </div>
 </div>

  </div>
 </div>
  </section>

    </div>

);

export default GiftCard;