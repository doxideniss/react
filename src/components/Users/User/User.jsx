import React from 'react'
import userPhoto from '../../../assets/images/avatar.jpg'

const User = props => {
  const {user, onToggleFollow} = props

  const onBtnClick = e => {
    onToggleFollow(user.id);
  };

  return (
    <div>
      <div>
        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt={user.name}/>
        <button onClick={onBtnClick}>{user.followed ? 'Unfollow': 'Follow'}</button>
      </div>
      <div>
        <h3>{user.name}</h3>
        <p>{user.status}</p>
      </div>
      {/*<div><p>{user.location.country}, {user.location.city}</p></div>*/}
    </div>
  )
}

export default User