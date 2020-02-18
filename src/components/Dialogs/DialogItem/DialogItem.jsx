import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

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

export default DialogItem