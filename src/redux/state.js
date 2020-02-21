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
  },
  getState() {
    return this._state
  },
  _callSubscriber() {
    console.log('State changed')
  },
  addPost() {
    this._state.profilePage.posts.push({
      id: 5,
      message: this._state.profilePage.newPostText,
      likes: 0
    })
    this._state.profilePage.newPostText = ''
    this._callSubscriber(this)
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText
    this._callSubscriber(this)
  },
  subscribe(observer) {
    this._callSubscriber = observer
  }
}

export default store
