import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {
  setProfile
} from "../../redux/profile-reducer";
import {connect} from "react-redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
      .then(res => {
        this.props.setProfile(res.data)
      })
  }

  render() {
    return (
      <div>
        <Profile profile={this.props.profileInfo} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
