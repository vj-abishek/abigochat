import React, { Component } from 'react'
import moment from 'moment';
import '../App.css'
import { connect } from "react-redux";
import { getData } from "../store/actions/projectActions";
import unirest from 'unirest'
import  MobileNav  from '../nav/MobileNav';
// const ReactCSSTransitionGroup = require('react-addons-transition-group');

class Store extends Component {
  state={
    date:''
  }
  componentDidMount(){
    let this_ = this;
    let date_;
    setInterval(calculate(),100);
    function calculate() {
      const now = new Date()
     date_ =  moment(now).fromNow();
     console.log(date_)
     this_.setState({
      date:date_
    })
   }
   unirest.get("https://devru-gaana-v1.p.rapidapi.com/featuredAlbums.php")
   .header("X-RapidAPI-Key", "29e6af6553msh9e3f1396e14255cp153c8ajsnd25696aa04aa")
   .end(function (result) {
     console.log(result);
   });
  }
  render() {
    // const { projects,getData } = this.props
    // console.log(this.state)
    // console.log(getData())
    return (
     <div>
       <p>This is from store</p>
       <MobileNav className="mobile"/>
     </div>
    )
  }
}
const mapState = (state) => {
  return{
    projects:state.project.projects
  }
}

const mapDispatch = (dispatch) => {
  return{
    getData:(project) => dispatch(getData(project))
  }
}
export default connect(mapState,mapDispatch)(Store)