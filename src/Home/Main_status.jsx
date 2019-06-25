import React, { Component } from "react"
import { GetUsers } from "../store/actions/projectActions"
import Status from "../Status/Status_file"
import { connect } from "react-redux"
class Main_status extends Component {
  render() {
    const { auth, Id } = this.props
    this.props.GetUsers(auth.uid) 

    const { abigoID } = Id !== undefined ? Id.data() : ""
    return (
      <section className="container">
        <article className="status_card">
          <div className="ConZ_user_profile">
            <div className="user_profile_placeholder_realme4">
              <img
                src={auth.photoURL}
                alt=""
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
            </div>
            <div className="coNz_user_name_">
              <div className="abigo_user_id">{abigoID}</div>
              <div className="user_real_n">{auth.displayName}</div>
            </div>
          </div>
          <div className="RfDosCz_status_div">
            <header className="status_header">Status</header>
            <Status />
            <Status />
            <Status />
          </div>
          <footer>&copy; 2019 ABIGOCHAT. All rights reserved</footer>
        </article>
      </section>
    )
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    Id: state.project.documentUser_Me
  }
}
const mapDispatch = dispatch => {
  return {
    GetUsers: uid => dispatch(GetUsers(uid))
  }
}
export default connect(
  mapStateToProps,
  mapDispatch
)(Main_status)
