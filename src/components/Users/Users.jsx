import React from "react";
import User from "./User/User";
import s from './Users.module.css'
import * as axios from 'axios';

class Users extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items)
        this.props.setTotalCount(res.data.totalCount)
      })
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (prevProps.currentPage !== this.props.currentPage) {
  //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
  //       .then(res => {
  //         this.props.setUsers(res.data.items)
  //         this.props.setTotalCount(res.data.totalCount)
  //       })
  //   }
  //
  // }

  onClickPagination = (p) => {
    return () => {
      this.props.setCurrentPage(p)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
        .then(res => {
          this.props.setUsers(res.data.items)
          this.props.setTotalCount(res.data.totalCount)
        })
    }
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <div>
        {pagesCount ? (
          <ul className={s.paginator}>
            {
              pages.map(x => <li
                key={x}
                className={`${s.paginator__item} ${x === this.props.currentPage ? s.paginator__item_active : null}`}
                onClick={this.onClickPagination(x)}
              >
                {x}
              </li>)
            }
          </ul>
        ) : null
        }
        <h2>Users</h2>
        {
          this.props.users.map(x => <User key={x.id} user={x} onToggleFollow={this.props.onToggleFollow}/>)
        }
      </div>
    );
  }

}

export default Users