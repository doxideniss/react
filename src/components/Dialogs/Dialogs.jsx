import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {require, maxLengthCreator} from "../../utils/validators";

import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const maxLength50 = maxLengthCreator(50);

const Dialogs = props => {
  let { state, sendMessageCreator } = props;

  let dialogsEl = state.dialogs.map(x => (
    <DialogItem key={x.id} name={x.name} id={x.id} />
  ));
  let messagesEl = state.messages.map(x => <Message key={x.id} message={x.message} />);

  const onSubmit = (formData) => {
    sendMessageCreator(formData.message);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>{dialogsEl}</div>
      <div className={s.dialogs__messages}>
        <div>{messagesEl}</div>
        <AddMessageReduxForm onSubmit={onSubmit}/>
      </div>
    </div>
  );
};

const AddMessageForm = props => {

  const {handleSubmit} = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="message"
               component={Textarea}
               placeholder="Enter your message"
               validate={[require, maxLength50]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
};

const AddMessageReduxForm = reduxForm({
  form: 'message'
})(AddMessageForm);

export default Dialogs;
