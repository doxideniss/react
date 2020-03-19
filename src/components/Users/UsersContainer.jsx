import React from "react";
import {connect} from "react-redux";
import {
  setCurrentPage,
  setTotalCount,
  setUsers,
  onToggleFollow,
  toggleIsFetching, toggleFollowingProgress
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true)

    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.setUsers(data.items)
        this.props.setTotalCount(data.totalCount)
        this.props.toggleIsFetching(false)
      })
  }

  onClickPagination = (p) => {
    return () => {
      if (+p === p) {
        this.props.setCurrentPage(p)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(p, this.props.pageSize)
          .then(data => {
            this.props.setUsers(data.items)
            this.props.setTotalCount(data.totalCount)
            this.props.toggleIsFetching(false)
          })
      }
    }
  }

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
          onToggleFollow={this.props.onToggleFollow}
          onToggleFollowingProgress={this.props.toggleFollowingProgress}
        />
      )
      }
    </>

  }

}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}
const mapDispatchToProps = {
  onToggleFollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  toggleIsFetching,
  toggleFollowingProgress
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
