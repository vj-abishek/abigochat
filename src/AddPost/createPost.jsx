import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from '../animation/loadingBar'
import Textarea from './Form/textarea'
import { AddMessage,MessageNPhoto } from '../store/actions/projectActions'
// import {Redirect} from 'react-router-dom';

class createPost extends Component {
    state = {
        message:'',
        photo:''
    }
   
    // const handleClick = (e) => console.log(e.target.value)
     handleChange = e => {
        const val = e.target.value
        if(val.length <= 120){
           this.setState({
               message:val
           })
        }
    }
     handleFile = e => {
        const file = e.target.files[0];
        if(file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/gif"){
           this.setState({
               photo:file
           })
        }
        else{
            console.log('Failed')
        }
        
    }
    Save = () => {
      if(this.state.message !== '' || this.state.photo !== ''){
        if(this.state.message !== '' && this.state.photo ===''){
           const value = {
               uid:this.props.auth.uid,
               message:this.state.message
           }
           console.log(value)
           this.setState({
               loadingOnly:true
           })
          this.props.AddMessage(value)

        }       
        else{
            const value = {
                uid:this.props.auth.uid,
                message:this.state.message,
                photo:this.state.photo
            }
            console.log(value)
            this.props.MessageNPhoto(value)
        }
      }
      else{
          console.log(":Required")
      }
    }
    render(){
        return (
            <article>
                 {this.props.auth.isLoaded  ?  '': <LoadingBar/>}
                 {this.props.percent.loading || this.state.loadingOnly ? (
                     <div style={{position:'fixed',background:'rgba(0,0,0,0.2)',zIndex:'8',width:'100%',height:'100vh'}}></div>
                 ) :''}
                 {this.props.percent.uploaded ? window.location="/" :''}
                 {this.props.percent.createdPost ? window.location="/" :''}
                 {/* <PreLoader/> */}
               <header className="createPostHeader">
                   <div><i className="material-icons" style={{fontSize:'25px'}}><Link to="/">arrow_back_ios</Link></i></div>
                   <h5 >Create post</h5>
                   <div style={{cursor:'pointer'}} onClick={this.Save}>Share</div>
               </header>
               <section style={{background:'#fff',padding:'1rem'}}>
                   <main className="circle_container">
                       <div className="circle">
                           <img src={this.props.auth.photoURL} alt="" style={{width:'50px',height:'50px',borderRadius:'50%'}}/>
                       </div>
                       <div className="user_Name_con">
                           <h6 style={{fontSize:'18px'}}>{this.props.auth.displayName}</h6>
                           
                               {/* <label htmlFor="colors"style={{fontSize:'16px'}}>Share With :-  </label>                             */}
                                              
                       </div>                   
                   </main>
                   
                   <Textarea onChange={this.handleChange} fileChange={this.handleFile} save = {this.Save}/>
               </section>
               {this.props.percent.loading ? (
                   <section className="preloader_cont">
                   <h5>Uploading image({this.props.percent.percent.toFixed()}%)...</h5>
               <div className="progress">
                         <div className="determinate" style={{width:`${this.props.percent.percent}%`}}></div>
                 </div> 
                </section>
               ): ''}
            </article>
        )
    }
}
const mapStateToProps = (state) => {
    console.log('From createPOst',state)
      return{
        auth:state.firebase.auth,
        percent:state.project
      }
    }
const mapDispatch = (dispatch) => {
    return{
        AddMessage:(data) => dispatch(AddMessage(data)),
        MessageNPhoto : (data) => dispatch(MessageNPhoto(data))
    }
}
export default connect(mapStateToProps,mapDispatch)(createPost)