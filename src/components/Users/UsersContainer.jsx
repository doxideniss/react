import React from "react";
import {connect} from "react-redux";
import {
  setCurrentPage,
  setTotalCount,
  setUsers,
  onToggleFollow,
  onTogglePreloader
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.onTogglePreloader()
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items)
        this.props.setTotalCount(res.data.totalCount)
        this.props.onTogglePreloader()
      })
  }

  onClickPagination = (p) => {
    return () => {
      if (+p == p) {
        this.props.setCurrentPage(p)
        this.props.onTogglePreloader()
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
          .then(res => {
            this.props.setUsers(res.data.items)
            this.props.setTotalCount(res.data.totalCount)
            this.props.onTogglePreloader()
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
          onClickPagination={this.onClickPagination}
          onToggleFollow={this.props.onToggleFollow}
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
    isFetching: state.usersPage.isFetching
  }
}
const mapDispatchToProps = {
  onToggleFollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  onTogglePreloader
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
