import React from "react"
import { Spring } from "react-spring/renderprops"

export default function Presentation() {
  return (
    <Spring from={{ marginTop: "100vh" }} to={{ marginTop: "0px" }}>
      {props => (
        <div style={props}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta nisi,
          pariatur iusto ducimus eveniet laborum consectetur a iure praesentium.
          Eum commodi eaque hic numquam porro mollitia velit voluptatem neque
          eveniet.
        </div>
      )}
    </Spring>
  )
}
