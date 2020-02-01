import React, { Component } from 'react'

import MobileNav from '../nav/MobileNav'
import DesktopNav from '../nav/DesktopNav'
import axios from 'axios'

export default class index extends Component {
  state = {
    data: ''
  }
  componentDidMount() {
    const value = window.prompt('Select random number and know about it..')
    axios
      .get(`http://numbersapi.com/${value}/math`)
      .then(data => {
        console.log(data.data)
        this.setState({
          data: data.data
        })
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div
        className='container'
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '10px'
        }}
      >
        <DesktopNav />
        <blockquote> Here is the value {this.state.data}</blockquote>
        <br></br>
        <button
          className='btn'
          onClick={() => this.props.history.push('/explore')}
        >
          Go to Home
        </button>
        <MobileNav className='mobile' />
      </div>
    )
  }
}
