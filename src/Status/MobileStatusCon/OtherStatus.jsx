import React from "react"
import { connect } from "react-redux"

// import { Redirect } from "react-router-dom"

function OtherStatus(props) {
  const { photoURL, displayName } = props.auth
  const handleClick = () => {
    console.log(props)
  }
  //    document.documentElement.style
  //     .setProperty('--userPhoto', `url(${photoURL})`);
  return (
    <div className="modern_design_con2" onClick={handleClick}>
      <div className="ScaledImageContainer2" />
      <span className="addStatus_me_iusser">
        <div className="imageContai">
          <img
            src={photoURL}
            alt="Profile"
            style={{ widh: "100%", height: "100%", borderRadius: "50%" }}
          />
        </div>
      </span>
      <span
        className="userNameStatus"
        style={{ fontSize: "13px", textAlign: "center", marginLeft: "0" }}
      >
        <div>{displayName}</div>
      </span>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps)(OtherStatus)
