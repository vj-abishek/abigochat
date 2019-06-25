import React from "react"

export default function Status_file() {
  return (
    <article className="main_flex_con_for_status">
      <div className="status_single_con">
        <div className="rela_button_status">
          <div className="status_user">
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "#ccc",
                marginLeft: "3px"
              }}
            />
          </div>
          <div className="user_name_placeholder flex_of_staus">
            <div className="real_user_name" />
            <div className="real_time_of_ac" />
          </div>
        </div>
      </div>
    </article>
  )
}
