import React, { Component } from 'react'
import AskQuestion from './AskQuestion';
import M from 'materialize-css'

export default class textarea extends Component {
    state = {
        toggle:false
    }
    componentDidMount(){
        M.AutoInit();
    // document.querySelector('input#input_text, textarea#textarea2').characterCounter();
    M.textareaAutoResize(document.querySelector('#textarea2'));
    }
     ClickRealFileSelector = () => {
        const file = document.querySelector('#userPhoto')
        file.click()
    }
    handleQuestion = () => {
        this.setState({
            toggle:!this.state.toggle
        })
        console.log(this.state.toggle)
    }
    render() {
        return (
            <main>
           <div className="row">
           {this.state.toggle ? <AskQuestion/> : (
               <div className="input-field col s12">
               <textarea id="textarea2" style={{maxHeight:'120px'}} className="materialize-textarea" data-length="120" onChange={this.props.onChange}  ref = { textarea => {this.textarea = textarea}}></textarea>
               <label htmlFor="textarea2">Write Something or Add Caption</label>
             </div>
           )}
        </div>
        <div className="container_">
            <div className="insert_photo_btn" onClick={this.ClickRealFileSelector}>
                <div>
                <i className="material-icons" > insert_photo </i> 
                </div>                    
                <label style={{fontSize:'16px',marginLeft:'5px',cursor:'pointer'}}>Insert photo</label>
            </div>
            <div className="insert_photo_btn" onClick={this.handleQuestion}>
                <div>
                <i className="material-icons" > question_answer </i> 
                </div>                    
                <label style={{fontSize:'16px',marginLeft:'5px',cursor:'pointer'}}>add question</label>
            </div>
        </div>
            
        <div>
            <input type="file" id="userPhoto" accept="image/*" style={{display:'none'}} onChange={this.props.fileChange}/>
        </div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'20px'}}>
            <button className="waves-effect waves-light btn" onClick={this.props.save}><i className="material-icons right">send</i>Share</button>
            </div>
        </main>
        )
    }
}
