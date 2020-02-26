import React from "react";
import Dialogs from "./Dialogs";
import {
  sendMessageCreator,
  updateNewMessageTextCreator
} from "../../redux/dialogs-reducer";

const DialogsContainer = props => {
  let { store } = props;
  let state = store.getState().dialogsPage;

  const onMessageChange = val => {
    store.dispatch(updateNewMessageTextCreator(val));
  };

  const onMessageClick = () => {
    store.dispatch(sendMessageCreator());
  };

  return (
    <Dialogs
      state={state}
      messageChange={onMessageChange}
      messageClick={onMessageClick}
    />
  );
};

export default DialogsContainer;
