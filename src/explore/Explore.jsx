import React, { Component } from 'react'
import MobileNav from '../nav/MobileNav'
import DesktopNav from '../nav/DesktopNav'
// import LoadingBar from '../animation/loadingBar'

const seefacts = {
  width: '240px',
  height: 'auto',
  padding: '6px',
  backgroundColor: '#0093FF',
  borderRadius: '20px',
  cursor: 'pointer',
  marginBottom: '5px',
  display: 'flex',
  alignItems: 'center',
  boxShadow: '3px 5px 6px rgba(0,0,0,0.1)',
  justifyContent: 'center'
}
const seeQuestions = {
  backgroundColor: '#00A435',
  width: '240px',
  height: 'auto',
  padding: '6px',
  boxShadow: '3px 5px 6px rgba(0,0,0,0.1)',
  cursor: 'pointer',
  borderRadius: '20px',
  marginBottom: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}
class Explore extends Component {
  state = {
    loading: true
  }

  render() {
    return (
      <div>
        <DesktopNav />
        {/* {this.state.loading ? <LoadingBar /> : ''} */}
        <div
          className='container'
          style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }}
        >
          <div
            style={seefacts}
            onClick={() => this.props.history.push('/math')}
          >
            <h6 style={{ textAlign: 'center', color: '#fff' }}>
              SEE MATH FACTS
            </h6>
            <i className='material-icons' style={{ color: '#fff' }}>
              arrow_forward
            </i>
          </div>
          <div style={seeQuestions}>
            <h6 style={{ textAlign: 'center', color: '#fff' }}>
              SOLVE QUESTIONS
            </h6>
            <i className='material-icons' style={{ color: '#fff' }}>
              arrow_forward
            </i>
          </div>
        </div>
        <MobileNav className='mobile' />
      </div>
    )
  }
}

export default Explore
