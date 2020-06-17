import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import Profile from "./Profile";
import {
  setProfile,
  getProfile
} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2
    }
    this.props.getProfile(userId);
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
});

const mapDispatchToProps = {
  setProfile,
  getProfile
};

let URIDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(URIDataContainerComponent);
