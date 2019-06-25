import React, { Component  } from 'react'
import { Link} from "react-router-dom";
import {createUser,createRealUser,UniqueName} from '../store/actions/authActions'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import * as firebase from 'firebase/app';
import 'firebase/auth';

 class signup extends Component {
  state = {
    userName :'',
    Email:'',
    password:'',
    avatar:'',
    
  }
 
  componentWillMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        console.log(user);
        
        let emailVerified_me =  firebase.auth().currentUser.emailVerified;
        this.setState({
          emailVerified:emailVerified_me
        })
       
      }
    })
  
    
  }

 
  handleChange = (e) => {
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.createUser(this.state)
  }
  handleChange_file = e => {
    const input = this.refs.avatar;
    const reader = new FileReader();
    reader.onload = () => {
      this.setState({
        avatar:input.files[0]
      })
      console.log(this.state)
      
    }
    reader.readAsDataURL(input.files[0])
    console.log(input.files[0])
  }
  handleKeyUp = () => {
    let userValue = this.refs.userNameUnique.value;
  if(userValue !== ''){
    this.props.UniqueName(userValue)
  }
  
  }
  saveNcontinue = (e) => {
    e.preventDefault();
   let {email,uid} = this.props.auth;
   let {userNAmeME,photoURL} =this.props.userDaTa
   let id = this.props.name;
   let data = {
     displayName:userNAmeME,
     email:email,
     photoURL:photoURL,
     uid:uid,
     abigoID:id
   }
   console.log(data)
   this.props.createRealUser(data)
  }
  
  render() {
    if(this.props.realUser) {
      console.log("Redirecting...")
     return <Redirect to="/" />
    }
    if(this.props.created){
      let clickMe=document.getElementById('stepReal');
      console.log(clickMe);
      clickMe.click()
    }
    return (
   <div className="background_linear_gradient_signup">
    <div className="login_design_form">
        <h6 className="center bold">ABIGOCHATS</h6>
        {this.props.created ? (
          <p className="green-text center">User created successfully!!</p>
        ): ''}
       <div className="row">
       <ul className="tabs spaced">
          <li className="tab col s6 l6">
            <Link to="#step1" className="active indigo-text text-darken-4">Step 1</Link>
          </li>
          <li className="tab col s6 l6">
            <Link to="#step2" className="indigo-text text-darken-4" id="stepReal">Step 2</Link>
          </li>
        </ul>
        <div className="col s12" id="step1">
        <div className="row">
    <form className="col s12" onSubmit={this.handleSubmit}>
      <div className="row">
        <div className="input-field col s6">         
          <input id="userName" type="text" className="validate" onChange={this.handleChange} />
          <label htmlFor="userName">User Name</label>
        </div>
        <div className="input-field col s6">          
          <input id="Email" type="email" className="validate" onChange={this.handleChange}/>
          <label htmlFor="Email">Your Email</label>
        </div>
        <div className="input-field col s6">         
          <input id="password" type="password" className="validate" onChange={this.handleChange} autoComplete="new-password"/>
          <label htmlFor="password">Choose a password</label>
        </div>
        <div className="input-field col s6">         
          <input id="confirm_password" type="password" className="validate" autoComplete="new-password"/>
          <label htmlFor="confirm_password">Confirm password</label>
        </div>
      </div>
      <div className="file-field input-field">
      <div className="waves-effect waves-light btn blue">
        <span>Choose avatar</span>
        <input type="file" ref="avatar" id="avatar" onChange={this.handleChange_file}/>
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text"/>
      </div>
    </div>
    <div className="input-field center">
            <button type="submit" className="btn waves-effect waves-light custom_color">Create</button>
          </div>  
    </form>
  </div> 
  <div className="center" >Already Have an account? <Link to="/login">Login</Link></div>
        </div>
        
        <div className="col s12" id="step2">
          <div className="row">
          
          { this.state.emailVerified ? '' : (
           <div>
              <p className="center flow-text">Email Verification</p>
              <p>1. You are one step ahead, Please verify your email.<br></br>
              verified : false (<b>if verified ignore it</b>)<br></br>
              <button className="btn btn-small" >Resend Email</button>
            </p>
           </div>
          )}
          <p>2. Choose user ID ( use: abc..,123..):</p>
          <form className="col s12" onSubmit={this.saveNcontinue}>
      
        <div className="input-field ">         
          <input id="icon_prefix" type="text" className="validate" ref="userNameUnique" onKeyUp={this.handleKeyUp}/>
          <label htmlFor="icon_prefix">Choose unique userName</label>
        </div>    
        { this.props.name.type ? (
          <p className="green-text">@{this.props.name.name} is avaliable</p>  
        ) : ''
        }
        {
          this.props.name.type === false ? (
            <p className="red-text">@{this.props.name.name} is unavaliable</p> 
          ):' '
        }
          
    { this.props.name.type ?   (
      <div className="input-field center">
      <button type="submit" className="btn waves-effect waves-light custom_color ">Save &amp; Continue</button>
    </div>
    ): (
      <div className="input-field center">
            <button type="submit" className="btn waves-effect waves-light custom_color disabled">Save &amp; Continue</button>
          </div>
    )}  
    </form>
          </div>
        </div>  
       </div>
       
    </div>
    
   </div>
    )
  }
}
const mapToDispatch = (dispatch) => {
  return{
    createUser:(cred) => dispatch(createUser(cred)),
    UniqueName:(name) => dispatch(UniqueName(name)),
    createRealUser:(data) => dispatch(createRealUser(data))
  }
}
const mapStateToProps = (state) => {
  console.log(state)
    return{
      auth:state.firebase.auth,
      name:state.auth.avaliable,
      created:state.auth.created,
      realUser:state.auth.realUser,
      userDaTa: state.auth.userDataaprofile
    }
  }
export default connect(mapStateToProps,mapToDispatch)(signup)
