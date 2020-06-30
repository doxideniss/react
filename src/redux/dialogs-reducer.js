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
  ]
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        newMessageText: "",
        messages: [...state.messages, {
          message: action.newMessageText,
          id: 4
        }]
      };
    default:
      return state
  }

};

export const sendMessageCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText});

export default dialogsReducer
