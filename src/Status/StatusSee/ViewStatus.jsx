import React, { Component } from "react"

export default class ViewStatus extends Component {
  render() {
    const { bgcolor, abigoID, photoURL, text } = this.props

    return (
      <div className="ViewStatus" style={{ background: `${bgcolor}` }}>
        <header className="informationSection">
          <div className="backButton">
            <i className="material-icons" style={{ color: "#fff" }}>
              arrow_back_ios
            </i>
          </div>
          <div className="userDetailProfile">
            <img
              src={photoURL}
              alt="profile "
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            />
          </div>
          <div className="userDetails" style={{ color: "#fff" }}>
            {abigoID}
          </div>
        </header>
        <article className="tex_status">
          <p>{text}</p>
        </article>
      </div>
    )
  }
}
