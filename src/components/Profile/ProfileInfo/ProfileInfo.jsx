import React from "react"
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

  let {profile} = props

  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div>
      <img src={profile.photos.small} alt=""/>
      <div>{profile.fullName}</div>
      <div>{profile.aboutMe}</div>
    </div>
  );
};

export default ProfileInfo;
