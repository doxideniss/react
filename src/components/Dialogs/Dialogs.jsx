import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {

  let { state} = props;

  let dialogsEl = state.dialogs.map(x => <DialogItem name={x.name} id={x.id}/>);
  let messagesEl = state.messages.map(x => <Message message={x.message}/>);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        { dialogsEl }
      </div>
      <div className={s.dialogs__messages}>
        { messagesEl }
      </div>
    </div>
  );
};

export default Dialogs;
