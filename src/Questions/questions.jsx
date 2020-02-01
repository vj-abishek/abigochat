import React, { Component } from 'react'
import TopNav from '../nav/Header/Topnav'
import M from 'materialize-css'

export default class questions extends Component {
  state = {
    warning: '',
    action: ''
  }
  componentDidMount() {
    document.title = 'Ask a Question - Abigo React'
    var instances = M.Chips.init(this.chips, {
      placeholder: 'Enter a tag',
      secondaryPlaceholder: '+Addanother'
    })
    console.log(instances)
    this.setState({
      instances
    })
  }
  isEmpty = obj => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false
    }
    return true
  }
  SendQuestion = () => {
    const chips = this.state.instances.chipsData
    const title = this.title.value
    const body = this.body.value

    if (title === '') {
      this.setState({
        warning: 'Please select a suitable title '
      })
    } else if (body === '') {
      this.setState({
        warning: 'Please fill suitable content'
      })
    } else if (this.isEmpty(chips)) {
      this.setState({
        warning: 'Please select a related tag and press enter'
      })
      return
    } else {
      this.setState({
        action: 'disabled'
      })
      console.log(this.state.action)
    }
    const data = {
      title,
      body,
      chips
    }

    console.log(data)
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <TopNav title='New Post' history={this.props} />
        <div className='container'>
          <h4>Ask a Question</h4>
          <div className='cover_ofask'>
            <header style={{ padding: '10px' }}>
              <p className='red-text center-align'>{this.state.warning}</p>
              {/* Title */}
              <div style={{ fontWeight: 'bold' }}>Title</div>
              <div>
                Be specific and imagine you’re asking a question to another
                person
              </div>
              <div className='row'>
                <form action=''>
                  <input
                    type='text'
                    ref={title => (this.title = title)}
                    placeholder='e.g. Is there an R function for finding the index of an element in a vector?'
                  />
                </form>
              </div>
              {/* Body */}
              <div style={{ fontWeight: 'bold' }}>Body</div>
              <div>
                Include all the information someone would need to answer your
                question
              </div>
              <div className='row'>
                <form action=''>
                  <textarea
                    id='textarea1'
                    ref={body => (this.body = body)}
                    className='materialize-textarea'
                  ></textarea>
                </form>
              </div>
              {/* Tags */}
              <div style={{ fontWeight: 'bold' }}>Tags</div>
              <div>
                Add up to 5 tags to describe what your question is about and
                press enter
              </div>

              <div
                className='chips chips-placeholder'
                ref={chips => {
                  this.chips = chips
                }}
              ></div>
              <button
                className={'btn right-align ' + this.state.action}
                onClick={this.SendQuestion}
              >
                Post Question
              </button>
            </header>
          </div>
        </div>
      </div>
    )
  }
}
