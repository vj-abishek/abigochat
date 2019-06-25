import React from 'react'
import { connect } from "react-redux";
import { UniqueName,createRealUser } from "../store/actions/authActions";
import Spinner from 'react-spinner-material';
import {Redirect} from 'react-router-dom'

 function extraComponent(props) {
     const saveNcontinue = (e) => {
         e.preventDefault()
         let {email,uid,displayName,photoURL} = props.auth;         
         let id = props.name;
         let data = {
           displayName:displayName,
           email:email,
           photoURL:photoURL,
           uid:uid,
           abigoID:id
         }
         console.log(data)
         props.createRealUser(data)
     }
     const handleKeyUp = e => {
         let userValue = e.target.value
        if(userValue !== ''){
            props.UniqueName(userValue)
          }
     }
     if( props.realUser){
        return <Redirect to="/"/>
      }
  return (
      
    <div className="extra-component container">
     <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true} />
       <p>1. You are one step ahead . Please choose a unique user name:</p>
          <form className="col s12" onSubmit={saveNcontinue}>
      
        <div className="input-field ">         
          <input id="icon_prefix" type="text" className="validate" onKeyUp={handleKeyUp}/>
          <label htmlFor="icon_prefix">Choose unique userName</label>
        </div> 
        { props.name.type ? (
          <p className="green-text">@{props.name.name} is avaliable</p>  
        ) : ''
        }
        {
          props.name.type === false ? (
            <p className="red-text">@{props.name.name} is unavaliable</p> 
          ):' '
        }
          
    { props.name.type ?   (
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
  )
}
const mapStateToProps = (state) => {
    return{
        auth:state.firebase.auth,
        name:state.auth.avaliable,
        realUser:state.auth.realUser
    }
}
const mapDispatch = (dispatch) => {
    return{
        UniqueName:(name) => dispatch(UniqueName(name)),
        createRealUser:(data) => dispatch(createRealUser(data))
    }
}

export default connect(mapStateToProps,mapDispatch)(extraComponent)
