import React from "react";
import User from "./User/User";
import s from './Users.module.css'
import * as axios from 'axios';

const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  function pagination(c, m) {
    let current = c,
      last = m,
      delta = 2,
      left = current - delta,
      right = current + delta + 1,
      range = [],
      rangeWithDots = [],
      l;

    for (let i = 1; i <= last; i++) {
      if (i == 1 || i == last || i >= left && i < right) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  }

  let pages = pagination(props.currentPage, pagesCount)

  return (
    <div>
      {pagesCount ? (
        <ul className={s.paginator}>
          {
            pages.map((x, id) => <li
              key={id}
              className={`${s.paginator__item} ${x === props.currentPage ? s.paginator__item_active : null}`}
              onClick={props.onClickPagination(x)}
            >
              {x}
            </li>)
          }
        </ul>
      ) : null
      }
      <h2>Users</h2>
      {
        props.users.map(x => <User key={x.id} user={x} onToggleFollow={props.onToggleFollow}/>)
      }
    </div>
  );
}

export default Users