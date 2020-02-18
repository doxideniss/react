import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  return (
    <div>
      <div className={s.dialogs__item}>
        <NavLink to={"/dialogs/" + props.id} activeClassName={s.dialogs__item_active}>
          {props.name}
        </NavLink>
      </div>
    </div>
  );
};

const Message = props => {
  return (
    <div className={s.dialogs__message}>{props.message}</div>
  )
}

const Dialogs = props => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        <DialogItem name="Deniss" id="1"/>
        <DialogItem name="Alina" id="2"/>
        <DialogItem name="Max" id="3"/>

      </div>
      <div className={s.dialogs__messages}>
        <Message message="1" />
        <Message message="2" />
        <Message message="3" />
      </div>
    </div>
  );
};

export default Dialogs;
