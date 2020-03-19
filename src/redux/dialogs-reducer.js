const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return {...state, newMessageText: action.newText};
    case SEND_MESSAGE:
      return {
        ...state,
        newMessageText: "",
        messages: [...state.messages, {
          message: state.newMessageText,
          id: 4
        }]
      };
    default:
      return state
  }

}

export const updateNewMessageTextCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text
});
export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export default dialogsReducer