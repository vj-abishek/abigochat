import React, { Component } from 'react'
import  MobileNav  from '../nav/MobileNav';
import DesktopNav from '../nav/DesktopNav';
import LoadingBar from '../animation/loadingBar'
 class Explore extends Component {
   state={
     loading:true
   }
   componentDidMount(){
    navigator.geolocation.watchPosition(pos => console.log(pos))
   }
  
  render() {
    return (
      <div >
         <DesktopNav/>
         {this.state.loading ? <LoadingBar/> : ''}
        <div className="container">
            <h5>This is from explore. so Lets explore</h5>
        </div>
        <MobileNav className="mobile"/>
        
      </div>
    )
  }
}

export default Explore
