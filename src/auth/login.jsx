import React, { Component } from 'react'
import '../App.css';
import {  Link } from "react-router-dom";
import {connect} from 'react-redux';
import {signIn,LoginWithGoogle} from '../store/actions/authActions'
import {Redirect} from 'react-router-dom'
// import * as firebase from 'firebase/app';
// import 'firebase/auth';

class login extends Component {
  state={
    email:'',
    password:''   
  }
  
 

 

  handleChange = e => {
    this.setState({
      [e.target.id]:e.target.value
    })
   
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  ShowPassword = () => {
    let value = this.refs.password
    if(value.type === 'password'){
      value.type="text"
      return;
    }
    if(value.type==='text'){
      value.type="password"
      return;
    }
 
     
  }
  handleClick = () => {
    console.log('logging with Google...')
    this.props.LoginWithGoogle()

  }
  
  
  render() {
    if(this.props.result) {
      console.log("Redirecting...")
     return <Redirect to="/extra" />
    }
   if(this.props.result === false ){
    return <Redirect to="/" />
   }
   if(this.state.user)
   return <Redirect to="/" />  
   if(!this.props.auth.isEmpty){
     return <Redirect to="/"/>
   }
   
    return (
      <div className="background_linear_gradient">
        <div className="login_design_form">
        <div className="abigo_chats_ac_logo"></div>
        {console.log(this.props)}
            <form onSubmit={this.handleSubmit}>
            <div className="input-field">   
            <i className="material-icons prefix">email</i>        
            <input type="email" id="email" onChange={this.handleChange}/>
            <label htmlFor="email">Your Email</label>
          </div>
          <div className="input-field">     
          <i className="material-icons prefix">lock</i>      
            <input type="password" ref="password" id="password" onChange={this.handleChange}/>
            <label htmlFor="password">Your Password</label>
          </div>
          <p>
          <label>
                <input type="checkbox" onClick={this.ShowPassword}/>
                <span>Show password</span>
              </label>
          </p>
          <div className="input-field center">
            <button className="btn" >Login</button>
          </div>          
            </form>
            <div className="center">OR</div>
            <div className="input-field center">
            <button className="btn red" onClick={this.handleClick}>Login with Google</button>
          </div> 
          <div className="center">Don't Have an account? <Link to="/signup">Signup</Link></div>  
        </div>
      </div>
    )
  }
}
const mapToDispatch = (dispatch) => {
  return{
    signIn:(cred) => dispatch(signIn(cred)),
    LoginWithGoogle:(cred) => dispatch(LoginWithGoogle(cred))
  }
}
const mapStateToProps = (state) => {
  console.log('State:',state)
    return{
      auth:state.firebase.auth,
      result:state.auth.result,
      
      
    }
  }
export default connect(mapStateToProps,mapToDispatch)(login)