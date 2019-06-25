import React from 'react';
import { NavLink, Link } from "react-router-dom";
import '../materialize/materialize.min.css';
import MobileHeaderNav from './MobileHeaderNav'

const DesktopNav = () => {
    return(
         <nav className="nav-wrapper Desktop_nav_cont "> 
         <MobileHeaderNav />             
            <div className="container mobile_nav_header">            
              <Link to="/create"><span  className="brand-logo desk my_font">AbigoChat</span></Link>   
                       
              <ul id="nav-mobile" className="right hide-on-med-and-down">                         
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/explore">Explore</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/message">Message</NavLink></li>
                <li><NavLink to="/store">Store</NavLink></li>                          
              </ul>
            </div>            
          </nav> 
    )
}
export default DesktopNav