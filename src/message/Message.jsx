import React, { Component } from 'react'
import  MobileNav  from '../nav/MobileNav';
class Message extends Component {
  render() {
    return (
      <div className="container">
        <h5>This is from messenger</h5>
        <MobileNav className="mobile"/>
      </div>
    )
  }
}

export default Message
