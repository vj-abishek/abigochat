import React, { Component } from "react"
import StatusAdd from "./MobileStatusCon/StatusAdd"
import OtherStatus from "./MobileStatusCon/OtherStatus"
import { connect } from "react-redux"
import { getStatus } from "../store/actions/projectActions"
// import add from '../img/add.png'

class MobileStatus extends Component {
  render() {
    const { StatusDocs } = this.props
    console.log(this.props.history)
    return (
      //       <div className="card_user_add_s">
      //       <div className="contain_of_stor">
      //             <div className="your_story_placeholder ">
      //        </div>
      //             <div className="storyName">Add story</div>
      //       </div>
      //    </div>
      <div className="MOBILE_status_box">
        <StatusAdd />
        {StatusDocs &&
          StatusDocs.map(data => {
            const { backgroundColor, uid, text, timeStamp } = data.data()

            return (
              <OtherStatus
                key={data.id}
                docId={data.id}
                bgColor={backgroundColor}
                text={text}
                uid={uid}
                time={timeStamp}
              />
            )
          })}
        {this.props.getStatus()}
      </div>
    )
  }
}
const mapStateToprops = state => {
  return {
    StatusDocs: state.project.StatusDocs
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getStatus: () => dispatch(getStatus())
  }
}
export default connect(
  mapStateToprops,
  mapDispatchToProps
)(MobileStatus)
