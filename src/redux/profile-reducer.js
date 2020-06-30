import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_PROFILE = 'SET_PROFILE';
const UPDATE_STATUS = 'UPDATE_STATUS';

let initialState = {
  profileInfo: null,
  posts: [
    {id: 1, message: "hi", likes: 2},
    {id: 2, message: "1232", likes: 12},
    {id: 3, message: "2", likes: 3},
    {id: 4, message: "2123", likes: 123}
  ],
  status: ''
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {
          id: 5,
          message: action.newPostText,
          likes: 0
        }]
      };
    case SET_PROFILE:
      return {...state, profileInfo: action.profileInfo};
    case UPDATE_STATUS:
      return {...state, status: action.status};
    default:
      return state
  }

};

export const addPostCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setProfile = (profileInfo) => ({type: SET_PROFILE, profileInfo});
export const setStatus = (status) => ({type: UPDATE_STATUS, status});

export const getProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId)
    .then(res => {
      dispatch(setProfile(res.data))
    });
};
export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
    .then(res => {
      dispatch(setStatus(res.data))
    })
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then(res => {
      dispatch(setStatus(status));
    })
};

export default profileReducer
