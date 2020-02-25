import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";

const MyPosts = props => {
  let postsEl = props.posts.map(p => (
    <Post message={p.message} likesCount={p.likes}/>
  ));

  let newPostEl = React.createRef();

  const addPost = () => {
    props.dispatch(addPostCreator());
  };

  let onPostChange = () => {
    let text = newPostEl.current.value;
    props.dispatch(updateNewPostTextCreator(text));
  };

  return (
    <div>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostEl}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div>{postsEl}</div>
    </div>
  );
};

export default MyPosts;
