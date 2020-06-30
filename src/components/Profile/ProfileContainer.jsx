import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import Profile from "./Profile";
import {
  getProfile, updateStatus, getStatus
} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      if (this.props.isAuth) {
        userId = this.props.authUserId;
      }
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <div>
        <Profile profile={this.props.profileInfo} status={this.props.status} updateStatus={this.props.updateStatus}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  profileInfo: state.profilePage.profileInfo,
  status: state.profilePage.status,
  authUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});

const mapDispatchToProps = {
  getProfile,
  getStatus,
  updateStatus
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
