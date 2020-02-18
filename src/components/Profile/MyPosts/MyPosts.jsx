import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let {postData} = props

  let postsEl = postData.map(p => <Post message={p.message} likesCount={p.likes}/>)

  return (
    <div>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div>
        {postsEl}
      </div>
    </div>
  );
};

export default MyPosts;
