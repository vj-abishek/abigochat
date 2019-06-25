import React, { Component } from "react"
import MobileNav from "../nav/MobileNav"
import DesktopNav from "../nav/DesktopNav"
import { connect } from "react-redux"
import Status from "./Main_status"
import Feed from "./NewsFeed"
// import * as firebase from 'firebase/app';

import MobileStatus from "../Status/MobileStatus"
import { Spring } from "react-spring/renderprops"
import { getData, GetUser, getDatas } from "../store/actions/projectActions"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Ripple from "../animation/ripple"

class Home extends Component {
  state = {
    user: "",
    loadingBarProgress: 50,
    loading: true,
    data: []
  }

  // componentWillUnmount(){
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       // User is signed in.
  //       console.log(user);

  //      this.setState({
  //        user:user
  //      })

  //     }
  //   })

  // }

  onLoaderFinished = () => {
    this.setState({ loadingBarProgress: 0 })
  }
  handleScroll = () => {
    if (
      window.pageYOffset ===
      document.querySelector("body").offsetHeight + 60 - window.innerHeight
    ) {
      console.log("Success")

      this.props.getDatas(this.props.doc)
      this.setState({
        loading: true
      })
    } else {
      console.log(
        window.pageYOffset + 60,
        document.querySelector("body").offsetHeight - window.innerHeight
      )
    }
  }
  componentWillMount() {
    window.addEventListener("scroll", this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }
  componentDidMount() {
    this.props.getData()
  }

  render() {
    // const {auth} = this.props
    // if(!this.state.user)
    // return <Redirect to="/login" />
    const { post } = this.props

    return (
      <main>
        <DesktopNav />
        <ToastContainer />

        <Spring from={{ opacity: 1 }} to={{ opacity: 1 }}>
          {props => (
            <article style={props} className="container">
              <MobileStatus />
              <section className="flex_main">
                {post &&
                  post.map(da => {
                    const { photoURL, uid, timeStamp, message } = da.data()

                    return (
                      <Feed
                        key={da.id}
                        id={da.id}
                        postImage={photoURL}
                        Snap={timeStamp}
                        uid={uid}
                        message={message}
                      />
                    )
                  })}
              </section>
              <Status />
            </article>
          )}
        </Spring>
        {this.state.loading ? (
          <>
            <br />
            <br />
            <br />
            <br />
            <Ripple />
            <br />
            <br />
            <br />
            <br />
          </>
        ) : (
          ""
        )}
        <MobileNav className="mobile" />
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    post: state.project.data,
    doc: state.project.doc,
    UserPost: state.project.documentUser
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(getData()),
    getDatas: doc => dispatch(getDatas(doc)),
    GetUser: uid => dispatch(GetUser(uid))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
