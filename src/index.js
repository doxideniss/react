import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
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
]

let messageData = [
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

let postData = [
  {id: 1, message: "hi", likes: 2},
  {id: 2, message: "1232", likes: 12},
  {id: 3, message: "2", likes: 3},
  {id: 4, message: "2123", likes: 123}
]

ReactDOM.render(<App dialogsData={dialogsData} messageData={messageData} postData={postData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
