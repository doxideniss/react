import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
  _state: {
    dialogPage: {
      dialogs: [
        {
          name: "Den",
          id: 1
        },
        {
          name: "Alina",
          id: 2
        },
        {
          name: "Max",
          id: 3
        }
      ],
      messages: [
        {
          message: "1",
          id: 1
        },
        {
          message: "12",
          id: 2
        },
        {
          message: "123",
          id: 3
        }
      ],
      newMessageText: ''
    },
    profilePage: {
      posts: [
        {id: 1, message: "hi", likes: 2},
        {id: 2, message: "1232", likes: 12},
        {id: 3, message: "2", likes: 3},
        {id: 4, message: "2123", likes: 123}
      ],
      newPostText: ""
    }
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);

    this._callSubscriber(this);
  }
};

export default store;
