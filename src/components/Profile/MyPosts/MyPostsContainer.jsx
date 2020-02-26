import React from "react";
import {
  addPostCreator,
  updateNewPostTextCreator
} from "../../../redux/profile-reducer";

import MyPosts from "./MyPosts";

const MyPostsContainer = props => {
  let { store } = props;
  let state = store.getState().profilePage;
  const addPost = () => {
    store.dispatch(addPostCreator());
  };

  let onPostChange = text => {
    store.dispatch(updateNewPostTextCreator(text));
  };

  return (
    <MyPosts
      posts={state.posts}
      addPost={addPost}
      updateNewPostText={onPostChange}
      newPostText={state.newPostText}
    />
  );
};

export default MyPostsContainer;
