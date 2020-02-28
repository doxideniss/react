import {combineReducers, createStore} from 'redux'
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

const reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer
})

const store = createStore(reducers)

export default store