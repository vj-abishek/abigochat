import React from "react"
import { Spring } from "react-spring/renderprops"
import CreatePost from "./createPost"

// const props = useSpring({opacity: 1, from: {opacity: 0}})

export default function addPost() {
  return (
    <Spring
      from={{
        opacity: 0,
        marginTop: 500,
        boxShadow: "2px 4px 6px rgba(0,0,0,0.1)"
      }}
      to={{ opacity: 1, marginTop: 0, boxShadow: "0px" }}
    >
      {props => (
        <main style={props} className="create-post">
          <CreatePost />
        </main>
      )}
    </Spring>
  )
}
