import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

  let postData = [
    {id: 1, message: "hi", likes: 2},
    {id: 2, message: "1232", likes: 12},
    {id: 3, message: "2", likes: 3},
    {id: 4, message: "2123", likes: 123}
  ]

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
