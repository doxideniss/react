import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {

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

  let dialogsEl = dialogsData.map(x => <DialogItem name={x.name} id={x.id}/>)
  let messagesEl = messageData.map(x => <Message message={x.message}/>)

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
