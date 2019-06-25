import React, { Component } from "react"
import moment from "moment"
import * as firebase from "firebase/app"
import _profile from "../img/Profile-512.png"
import M from "materialize-css"
import { favorite } from "../store/actions/projectActions"
import { connect } from "react-redux"

class NewsFeed extends Component {
  state = {
    abigoID: "",
    displayName: "",
    photoURL: _profile,
    likeFavorite: false,
    likeCount: null,
    likeChangeCount: null,
    isLiked: false
  }
  componentDidMount() {
    M.Materialbox.init(this.materialboxed)
  }
  likeButton = () => {
    this.setState({
      likeFavorite: !this.state.likeFavorite,
      likeChangeCount: this.state.likeChangeCount + 1
    })

    const value = this.favorite
    if (this.state.likeFavorite) {
      value.style.color = "black"
      if (this.state.isLiked) {
        this.setState({
          likeCount: this.state.likeCount - 1,
          isLiked: false
        })
      }
    }
    if (!this.state.likeFavorite) {
      value.style.color = "red"
      this.setState({
        likeCount: this.state.likeCount + 1,
        isLiked: true
      })
      const dataToLike = {
        likes:
          this.props.likes !== undefined ? this.props.likes : parseInt("1"),
        uid: this.props.id,
        user: this.props.uid
      }
      console.log(dataToLike)
      this.props.favorite(dataToLike)
    }
  }
  render() {
    const { postImage, Snap, uid, message } = this.props
    
    firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .get()
      .then(data => {
        this.setState({
          abigoID: data.data().abigoID,
          displayName: data.data().displayName,
          photoURL: data.data().photoURL
        })
        const da = data.data().likes !== undefined ? data.data().likes : null
        this.setState({
          likeCount: da
        })
      })

    return (
      <main className="main_Ncontainer_feed">
        <article className="sub_feed_main">
          <header className="header_card_name">
            <div className="user_profile_picture">
              <div className="image">
                <img
                  src={this.state.photoURL}
                  alt=""
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                />
              </div>
            </div>
            <div className="user_name_placeholder">
              <div className="real_user_name">{this.state.displayName}</div>
              <div className="real_time_of_ac grey-text">
                {`@${this.state.abigoID} - ${
                  Snap !== undefined
                    ? moment(Snap.toDate()).fromNow()
                    : "loading..."
                }`}
              </div>
            </div>
          </header>
          {message !== undefined ? (
            <h5 style={{ marginLeft: "3px" }}>{message}</h5>
          ) : (
            ""
          )}
          {postImage !== undefined ? (
            <div className="user_content_plaeholder">
              <img
                src={postImage}
                alt="from firestore"
                ref={materialboxed => {
                  this.materialboxed = materialboxed
                }}
                className="materialboxed"
                data-caption={message}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ) : (
            ""
          )}
          {this.state.likeCount !== null ? (
            <p style={{ fontSize: " 13px", color: "#999", marginLeft: "3px" }}>
              {this.state.likeCount <= 1
                ? `${this.state.likeCount} like`
                : `${this.state.likeCount} likes`}
            </p>
          ) : (
            <p style={{ fontSize: " 13px", color: "#999", marginLeft: "3px" }}>
              Be first to like
            </p>
          )}
          <div className="user_interactive_section">
            <ul>
              <li>
                <i
                  onClick={this.likeButton}
                  className="material-icons"
                  style={{ fontSize: "30px", cursor: "pointer" }}
                  ref={favorite => {
                    this.favorite = favorite
                  }}
                >
                  {this.state.likeFavorite ? "favorite" : "favorite_border"}
                </i>
              </li>
              <li>
                <i className="material-icons" style={{ fontSize: "30px" }}>
                  fingerprint
                </i>
              </li>
              <li>
                <i className="material-icons" style={{ fontSize: "30px" }}>
                  bookmark_border
                </i>
              </li>
            </ul>
          </div>
        </article>
      </main>
    )
  }
}
const mapStateToProps = state => {
  return {
    doc: state.project.data
  }
}
const mapDispatch = dispatch => {
  return {
    favorite: data => dispatch(favorite(data))
  }
}
export default connect(
  mapStateToProps,
  mapDispatch
)(NewsFeed)
