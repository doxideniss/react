import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  sendMessageCreator,
  updateNewMessageTextCreator
} from "../../redux/dialogs-reducer";

const Dialogs = props => {

  let {state} = props;

  let dialogsEl = state.dialogs.map(x => <DialogItem name={x.name} id={x.id}/>);
  let messagesEl = state.messages.map(x => <Message message={x.message}/>);

  const onMessageChange = (e) => {
    props.dispatch(updateNewMessageTextCreator(e.target.value));
  }

  const onMessageClick = () => {
    props.dispatch(sendMessageCreator());
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        {dialogsEl}
      </div>
      <div className={s.dialogs__messages}>
        <div>{messagesEl}</div>
        <div>
          <div>
            <textarea onChange={onMessageChange}
                      value={state.newMessageText}
                      placeholder='Enter your message'
            />
          </div>
          <div><button onClick={onMessageClick}>Send</button></div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
