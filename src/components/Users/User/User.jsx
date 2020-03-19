import React from 'react'
import userPhoto from '../../../assets/images/avatar.jpg'
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {followAPI} from "../../../api/api";

const User = props => {
  const {user, followingInProgress, onToggleFollow, onToggleFollowingProgress} = props

  const onBtnClick = e => {
    onToggleFollowingProgress(true, user.id)
    if (user.followed) {
      followAPI.deleteFollow(user.id)
        .then(data => {
          if (!data.resultCode) {
            onToggleFollow(user.id);
            onToggleFollowingProgress(false, user.id)
          }
        })
        .catch(e => {
          onToggleFollowingProgress(false, user.id)
        })
    } else if (!user.followed) {
      followAPI.postFollow(user.id)
        .then(data => {
          if (!data.resultCode) {
            onToggleFollow(user.id);
            onToggleFollowingProgress(false, user.id)
          }
        })
        .catch(e => {
          onToggleFollowingProgress(false, user.id)
        })
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