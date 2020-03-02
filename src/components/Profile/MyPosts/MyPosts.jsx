import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {

  const {state, addPost, updateNewPostText} = props

  let postsEl = state.posts.map(p => (
    <Post key={p.id} message={p.message} likesCount={p.likes} />
  ));

  let newPostEl = React.createRef();

  const onAddPost = () => {
    addPost();
  };

  let onPostChange = () => {
    let text = newPostEl.current.value;
    updateNewPostText(text);
  };

  return (
    <div>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostEl}
            value={state.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div>{postsEl}</div>
    </div>
  );
};

export default MyPosts;
