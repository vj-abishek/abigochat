import React, { Component } from 'react'

export default class Topnav extends Component {
  render() {
    const { title, history } = this.props
    return (
      <div className='TopNavModel '>
        <div
          className='container'
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <i
            className='material-icons'
            onClick={() => history.history.push('/explore')}
            style={{ cursor: 'pointer' }}
          >
            arrow_back_ios
          </i>

          <h6 style={{ flex: '2' }}>{title}</h6>
          <i className='material-icons'>send</i>
        </div>
      </div>
    )
  }
}
