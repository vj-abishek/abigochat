import React, { Component } from "react"
import StatusAdd from "./MobileStatusCon/StatusAdd"
import OtherStatus from "./MobileStatusCon/OtherStatus"
// import add from '../img/add.png'

export default class MobileStatus extends Component {
  render() {
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
        <OtherStatus />
      </div>
    )
  }
}
