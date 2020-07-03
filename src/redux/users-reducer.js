import {usersAPI} from "../api/api";

const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING = "TOGGLE_IS_FOLLOWING";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
};

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map(x => (x.id === action.id ? {...x, followed: !x.followed} : x))
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      };
    case TOGGLE_IS_FOLLOWING:
      return {
        ...state,
        followingInProgress: action.isFetching ? [...state.followingInProgress, action.id] : [...state.followingInProgress.filter(id => id !== action.id)]
      };
    default:
      return state
  }

};

export const setUsers = (users) => ({type: SET_USERS, users});

export const onToggleFollow = (id) => ({type: TOGGLE_FOLLOW, id});

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});

export const toggleIsFetching = (on) => ({type: TOGGLE_IS_FETCHING, payload: on});

export const toggleFollowingProgress = (isFetching, id) => ({type: TOGGLE_IS_FOLLOWING, isFetching, id});

export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleIsFetching(true));

  usersAPI.getUsers(currentPage, pageSize)
    .then(data => {
      dispatch(setUsers(data.items));
      dispatch(setTotalCount(data.totalCount));
      dispatch(toggleIsFetching(false));
    })
};

export const follow = (id) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, id));
  usersAPI.follow(id)
    .then(data => {
      if (!data.resultCode) {
        dispatch(onToggleFollow(id));
        dispatch(toggleFollowingProgress(false, id))
      }
    })
    .catch(e => {
      dispatch(toggleFollowingProgress(false, id))
    })
};

export const unfollow = (id) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, id));
  usersAPI.unfollow(id)
    .then(data => {
      if (!data.resultCode) {
        dispatch(onToggleFollow(id));
        dispatch(toggleFollowingProgress(false, id))
      }
    })
    .catch(e => {
      dispatch(toggleFollowingProgress(false, id))
    })
};

export default usersReducer
