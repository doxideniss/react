import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {
  setProfile
} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
      .then(res => {
        this.props.setProfile(res.data)
      })
  }

  componentWillUnmount() {
    this.props.setProfile(null)
  }

  render() {
    return (
      <div>
        <Profile profile={this.props.profileInfo}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  profileInfo: state.profilePage.profileInfo
})

const mapDispatchToProps = {
  setProfile
}

let URIDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(URIDataContainerComponent);
