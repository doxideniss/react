import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://i.ya-webdesign.com/images/user-avatar-png-7.png' />
      {props.message}
      <div>
        <span>Like: </span>{props.likesCount}
      </div>
    </div>
  );
};

export default Post;
