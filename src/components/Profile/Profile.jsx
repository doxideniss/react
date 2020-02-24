import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = props => {
  let { state, dispatch } = props;

  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={state.posts}
        newPostText={state.newPostText}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Profile;
