import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

function StatusAdd() {
  return (
    <Link to="/camera">
      <div className="modern_design_con">
        <div className="ScaledImageContainer">
          <span className="addStatus_me_iusser">
            <i className="material-icons addIcons">add</i>
          </span>
          <span className="userNameStatus">
            <div>Add to story</div>
          </span>
        </div>
      </div>
    </Link>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps)(StatusAdd)
