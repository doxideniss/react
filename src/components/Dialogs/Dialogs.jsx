import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
  let { state, messageChange, messageClick } = props;

  let dialogsEl = state.dialogs.map(x => (
    <DialogItem key={x.id} name={x.name} id={x.id} />
  ));
  let messagesEl = state.messages.map(x => <Message key={x.id} message={x.message} />);

  const onMessageChange = e => {
    messageChange(e.target.value);
  };

  const onMessageClick = () => {
    messageClick();
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>{dialogsEl}</div>
      <div className={s.dialogs__messages}>
        <div>{messagesEl}</div>
        <div>
          <div>
            <textarea
              onChange={onMessageChange}
              value={state.newMessageText}
              placeholder="Enter your message"
            />
          </div>
          <div>
            <button onClick={onMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
