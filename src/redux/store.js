const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = 'SEND-MESSAGE';

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
    if (action.type === ADD_POST) {
      this._state.profilePage.posts.push({
        id: 5,
        message: this._state.profilePage.newPostText,
        likes: 0
      });
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogPage.newMessageText = action.newText;
      this._callSubscriber(this);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogPage.newMessageText;
      this._state.dialogPage.newMessageText = '';
      this._state.dialogPage.messages.push({
        message: body,
        id: 4
      })
      this._callSubscriber(this);
    }
  }
};

export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})
export const updateNewMessageTextCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text
})
export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export default store;
