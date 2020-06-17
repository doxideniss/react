import React from 'react'
import userPhoto from '../../../assets/images/avatar.jpg'
import {NavLink} from "react-router-dom";

const User = props => {
  const {user, followingInProgress, follow, unfollow} = props;

  const onBtnClick = () => {
    if (user.followed) {
      unfollow(user.id);
    } else if (!user.followed) {
      follow(user.id);
    }
  };

  return (
    <div>
      <div>
        <NavLink to={'/profile/' + user.id}>
          <img src={user.photos.small != null ? user.photos.small : userPhoto} alt={user.name}/>
        </NavLink>
        <button onClick={onBtnClick} disabled={followingInProgress.some(x => x === user.id)}>{user.followed ? 'Unfollow': 'Follow'}</button>
      </div>
      <div>
        <h3>{user.name}</h3>
        <p>{user.status}</p>
      </div>
    </div>
  )
}

export default User
