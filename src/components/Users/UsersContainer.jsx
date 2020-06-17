import React from "react";
import {connect} from "react-redux";
import {
  setCurrentPage,
  setTotalCount,
  getUsers,
  follow,
  unfollow
} from "../../redux/users-reducer";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  };

  onClickPagination = (p) => {
    return () => {
      if (+p === p) {
        this.props.setCurrentPage(p);
        this.props.getUsers(p, this.props.pageSize);
      }
    }
  };

  render() {
    return <>
      {this.props.isFetching ? (
        <Preloader/>
      ) : (
        <Users
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          pageSize={this.props.pageSize}
          users={this.props.users}
          followingInProgress={this.props.followingInProgress}
          onClickPagination={this.onClickPagination}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      )
      }
    </>

  };

}

const mapStateToProps = ({usersPage}) => {
  return {
    users: usersPage.users,
    pageSize: usersPage.pageSize,
    totalUsersCount: usersPage.totalUsersCount,
    currentPage: usersPage.currentPage,
    isFetching: usersPage.isFetching,
    followingInProgress: usersPage.followingInProgress
  }
};
const mapDispatchToProps = {
  setCurrentPage,
  setTotalCount,
  getUsers,
  follow,
  unfollow
};


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
