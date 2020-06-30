import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {require, maxLengthCreator} from "../../../utils/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = props => {

  const {state, addPostCreator} = props;

  let postsEl = state.posts.map(p => (
    <Post key={p.id} message={p.message} likesCount={p.likes}/>
  ));

  const onSubmit = (formData) => {
    addPostCreator(formData.post);
  };

  return (
    <div>
      <h2>My posts</h2>
      <AddNewPostReduxForm onSubmit={onSubmit}/>
      <div>{postsEl}</div>
    </div>
  );
};

const AddNewPostForm = (props) => {
  const {handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
          <Field name="post" component={Textarea} validate={[require, maxLength10]}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
};

const AddNewPostReduxForm = reduxForm({
  form: 'addPost'
})(AddNewPostForm);

export default MyPosts;
