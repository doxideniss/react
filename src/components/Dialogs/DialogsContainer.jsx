import React from "react";
import Dialogs from "./Dialogs";
import {
  sendMessageCreator,
  updateNewMessageTextCreator
} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    messageChange: (val) => {
      dispatch(updateNewMessageTextCreator(val))
    },
    messageClick: () => {
      dispatch(sendMessageCreator())
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
