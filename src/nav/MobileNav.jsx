import React from 'react';
import '../App.css';
import { NavLink } from "react-router-dom";
// import home from '../img/ic_home_black_36dp.png';
// import profile from '../img/ic_account_circle_black_36dp.png'
// import store from '../img/ic_store_black_36dp.png'
// import chat from '../img/ic_markunread_mailbox_black_36dp.png'
// import explore from '../img/ic_explore_black_36dp.png'

// const style={
//   marginTop:'4px'
// }
const MobileNav = () => {

   return(
      <div className="mobile-nav">
        
        <ul className="nav-white">
               <li><NavLink exact to="/">
                <div><i className="material-icons">
home
</i></div>
               <div className="title_align">Home</div></NavLink>
               </li> 
                <li> <NavLink to="/explore">
                <div><i className="material-icons">
explore
</i></div>
                <div className="title_align">Explore</div>
                </NavLink></li>
                <li> <NavLink to="/profile">
                <div><i className="material-icons">
account_circle
</i></div>
                <div className="title_align">Profile</div>
                </NavLink></li>
                <li> <NavLink to="/message">
                <div><i className="material-icons">
chat
</i></div>
                <div className="title_align">Message</div>
                </NavLink></li>
                <li> <NavLink to="/store">
                <div><i className="material-icons">
store
</i></div>
                <div className="title_align">Store</div>
                </NavLink></li>
              </ul>
        
      </div>
   )
}

export default MobileNav;