import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
        return state

  }

}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: { userId, email, login, isAuth }});

export const getAuthUserData = () => (dispatch) => {
  return authAPI.me()
    .then(res => {
      return res.data;
    })
    .then(data => {
      if (!data.resultCode) {
        const {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true))
      }
    })
};

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe)
    .then(res => {
      if (!res.data.resultCode) {
        dispatch(getAuthUserData());
      } else {
        dispatch(stopSubmit('login', {
          _error: res.data.messages[0]
        }))
      }
    })
};

export const logout = () => (dispatch) => {
  authAPI.logout()
    .then(res => {
      if (!res.data.resultCode) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    })
};

export default authReducer
