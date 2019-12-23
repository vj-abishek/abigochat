import React, { Component } from "react"
import Video from "./video"
import { connect } from "react-redux"
import { addStatus } from "../store/actions/projectActions"
import Loadingbar from "../animation/backgroundColor"

class index extends Component {
  state = {
    isClicked: false,
    colors: [
      "#8e44ad",
      "#2980b9",
      "#e67e22",
      "#d35400",
      "#16a085",
      "#192a56",
      "#40407a"
    ],
    userStatus: undefined,
    userFile: undefined,
    loading: false
  }

  handleClickColor = () => {
    console.log("Changing...")
    let random = Math.floor(Math.random() * 4)
    const bgChange = document.querySelector(".statusTextcolor")
    bgChange.style.background = this.state.colors[random]
    this.setState({
      userSetColor: this.state.colors[random]
    })
  }
  cameraCllick = () => {
    const fileUpload = document.querySelector("#fileUpload")
    fileUpload.click()
  }
  handleChange = e => {
    this.setState({
      userStatus: e.target.value
    })
    console.log(this.state)
  }
  submitStatus = e => {
    this.setState({
      loading: true
    })
    if (this.state.userStatus !== undefined) {
      const values = {
        userText: this.state.userStatus,
        userColor: this.state.userSetColor
          ? this.state.userSetColor
          : "#2980b9",
        uid: this.props.auth.uid
      }
      this.props.addStatus(values)
      console.log(values)
    } else {
      console.log("required")
    }
    if (this.state.userFile !== undefined) {
      const values = {
        file: this.state.userFile
      }
      console.log(values)
    }
  }
  handleChangeFile = e => {
    console.log(e.target.files[0])
    this.setState({
      userFile: e.target.files[0]
    })
  }
  render() {
    if (this.props.userAddedStatus) {
      console.log(this.props.history.push("/"))
    }
    if (this.state.isClicked === false) {
      return (
        <div className="statusTextcolor">
          {/* centerText */}
          {this.state.loading ? <Loadingbar /> : ""}
          <div className="centerTextStyle">
            <textarea
              type="text"
              className="materialize-textarea"
              onChange={this.handleChange}
              style={{
                outline: "0",
                color: "#fff",
                fontSize: "25px",
                textAlign: "center",
                fontFamily: "'Rubik Mono One', sans-serif"
              }}
              placeholder="Type a status"
              autoFocus
            />
          </div>
          {/* bottomTools */}
          <div className="bottomTools">
            <input
              type="file"
              style={{ display: "none" }}
              accept="image/*"
              id="fileUpload"
              onChange={this.handleChangeFile}
            />
            <div onClick={this.cameraCllick}>
              <i
                className="material-icons"
                style={{ fontSize: "25px", color: "#fff" }}
              >
                photo_library
              </i>
            </div>
            <div onClick={this.handleClickColor}>
              <i
                className="material-icons"
                style={{ fontSize: "25px", color: "#fff" }}
              >
                color_lens
              </i>
            </div>
            <button
              className="waves-effect waves-teal btn-flat"
              type="submit"
              onClick={this.submitStatus}
              style={{
                background: "#ff5252",
                borderRadius: "10px"
              }}
            >
              <i
                className="material-icons"
                style={{ fontSize: "25px", color: "#fff" }}
              >
                send
              </i>
            </button>
          </div>
        </div>
      )
    }
    if (this.state.isClicked) {
      return <Video />
    }
  }
}
const mapStatetoProps = state => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    userAddedStatus: state.project.userAddedStatus
  }
}
const mapDispatchtoProps = dispatch => {
  return {
    addStatus: data => dispatch(addStatus(data))
  }
}
export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(index)
