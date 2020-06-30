import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {require} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="email" component={Input} type="text" placeholder="Login" validate={require}/>
      </div>
      <div>
        <Field name="pass" component={Input} type="password" placeholder="Password" validate={require}/>
      </div>
      <div>
        <Field name="rememberMe" component={Input} type="checkbox"/> remember me
      </div>
      {props.error && (<div>
        {props.error}
      </div>)}
      <div>
        <button>Submit</button>
      </div>
    </form>
  )
};

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.pass, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to='/profile' />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {
  login
})(Login);
