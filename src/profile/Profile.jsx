import React, { Component } from 'react'
import  MobileNav  from '../nav/MobileNav';
import {connect} from 'react-redux'
import {logout} from '../store/actions/authActions'
class Profile extends Component {
  handleClick = () => {
    console.log('logging Out')
    this.props.logout()
  }
  render() {
    return (
      <section className="container">
        <h5>This is from Profile. Go and see your Profile</h5>
        <button onClick={this.handleClick} className="btn">Logout</button>
        <MobileNav className="mobile"/>
      </section>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    logout:state.auth.logout
  }
}
const MapDispatch = (dispatch) => {
  return{
    logout:(cred) => dispatch(logout(cred))
  }
}
export default connect(mapStateToProps,MapDispatch)(Profile)
