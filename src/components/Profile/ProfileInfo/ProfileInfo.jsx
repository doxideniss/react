import React from "react"
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

  let {profile, status, updateStatus} = props;

  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div>
      <img src={profile.photos.small} alt=""/>
      <div>{profile.fullName}</div>
      <ProfileStatus status={status} updateStatus={updateStatus}/>
    </div>
  );
};

export default ProfileInfo;
