const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  users: [
    {

    }
  ]
}

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return state
    case SEND_MESSAGE:
      return state
    default:
      return state
  }

}

export default usersReducer