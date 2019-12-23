import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as firebase from 'firebase/app'
import _profile from '../../img/Profile-512.png'
// import Viewstatus from "../StatusSee/ViewStatus"

// import { Redirect } from "react-router-dom"

class OtherStatus extends Component {
  state = {
    abigoID: 'loading...',
    photoURL: _profile,
    redirect: false,
    text: '',
    bgColors: ''
  }
  handleClickGo = () => {
    this.setState({
      redirect: true
    })
  }
  render() {
    const { bgColor, uid, docId } = this.props

    firebase
      .firestore()
      .collection('users')
      .doc(uid)
      .get()
      .then(data => {
        this.setState({
          abigoID: data.data().abigoID,

          photoURL: data.data().photoURL
        })
      })
    if (this.state.redirect) {
      const parms = `${docId}`
      console.log(parms)
    }
    return (
      <div className='modern_design_con2' onClick={this.handleClickGo}>
        <div
          className='ScaledImageContainer2'
          style={{ background: `${bgColor}` }}
        />
        <span className='addStatus_me_iusser'>
          <div className='imageContai'>
            <img
              src={this.state.photoURL}
              alt='Profile'
              style={{ widh: '100%', height: '100%', borderRadius: '50%' }}
            />
          </div>
        </span>
        <span
          className='userNameStatus'
          style={{ fontSize: '13px', textAlign: 'center', marginLeft: '0' }}
        >
          <div>{this.state.abigoID}</div>
        </span>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps)(OtherStatus)
