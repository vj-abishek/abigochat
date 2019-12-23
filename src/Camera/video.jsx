import React, { Component } from "react"

export default class video extends Component {
  componentDidMount() {
    videoCall()
  }
  render() {
    return (
      <>
        <canvas id="canvas" />
      </>
    )
  }
}
function videoCall() {
  const video = document.createElement("video")
  const canvas = document.getElementById("canvas")
  const ctx = canvas.getContext("2d")
  navigator.mediaDevices
    .getUserMedia({
      video: {
        width: {
          min: 320,
          max: 768
        },
        height: {
          min: 300,
          max: 760
        }
      },
      audio: false
    })
    .then(stream => {
      console.log(stream)
      video.srcObject = stream
      video.play()
    })
    .catch(err => console.error(err))
  video.addEventListener("loadedmetadata", () => {
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
  })
  video.addEventListener("play", function() {
    let thiss = this
    setInterval(() => {
      ctx.drawImage(thiss, 0, 0, video.videoWidth, video.videoHeight)
    }, 16)
  })
}
