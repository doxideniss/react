const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const TOGGLE_PRELOADER = "TOGGLE-PRELOADER";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false
}

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map(x => (x.id === action.id ? {...x, followed: !x.followed} : x))
      }
    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount
      }
    case TOGGLE_PRELOADER:
      return {
        ...state,
        isFetching: !state.isFetching
      }
    default:
      return state
  }

}

export const setUsers = (users) => ({type: SET_USERS, users})

export const onToggleFollow = (id) => ({type: TOGGLE_FOLLOW, id})

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})

export const onTogglePreloader = () => ({type: TOGGLE_PRELOADER})

export default usersReducer