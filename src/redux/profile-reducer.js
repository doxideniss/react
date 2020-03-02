const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    {id: 1, message: "hi", likes: 2},
    {id: 2, message: "1232", likes: 12},
    {id: 3, message: "2", likes: 3},
    {id: 4, message: "2123", likes: 123}
  ],
  newPostText: ""
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostText: "",
        posts: [...state.posts, {
          id: 5,
          message: state.newPostText,
          likes: 0
        }]
      };
    case UPDATE_NEW_POST_TEXT:
      return {...state, newPostText: action.newText};
    default:
      return state
  }

};

export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export default profileReducer