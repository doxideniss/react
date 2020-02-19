let rerenderTree
let state = {
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
        message: '1',
        id: 1
      },
      {
        message: '12',
        id: 2
      },
      {
        message: '123',
        id: 3
      }
    ]
  },
  profilePage: {
    posts: [
      {id: 1, message: "hi", likes: 2},
      {id: 2, message: "1232", likes: 12},
      {id: 3, message: "2", likes: 3},
      {id: 4, message: "2123", likes: 123}
    ],
    newPostText: '123'
  }
}

export const addPost = () => {
  state.profilePage.posts.push({
    id: 5,
    message: state.profilePage.newPostText,
    likes: 0
  })
  state.profilePage.newPostText = ''
  rerenderTree(state)
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText
  rerenderTree(state)
}

export const subscribe = (observer) => {
  rerenderTree = observer
}

export default state
