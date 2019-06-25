import React, { Component } from 'react';
import { connect } from "react-redux";
import { createProject } from "./store/actions/projectActions";

 class Home extends Component{
   state={
     title:''
   }
  handleChange = e => {
    this.setState({
      [e.target.id]:e.target.value
    })
  }
 handleSubmit = e => {
   e.preventDefault();
   console.log(this.state);
   createProject(this.state)
 }
    render(){
      const { projects } = this.props
        return(
       <div className="container">
         <ul>
          {projects && projects.map(project => {
            return(
              <li key={project.id}>
              <div className="red-text">{project.title}</div>
              <div className="pink-text">{project.content}</div>
              </li>
            )
          })}
          </ul>
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col s12 m6 l4">
                  <label htmlFor="title">Title</label>
                  <input type="text" onChange={this.handleChange} id="title" />
                </div>
              </div>
            </form>
          </div>
       </div>
     );
    }
}
const mapState = (state) => {
  return{
    projects: state.project.projects
  }
}
const mapDispatch = (dispatch) => {
  return{
    createProject:(project) => dispatch(createProject(project))
  }
}
export default connect(mapState,mapDispatch)(Home)