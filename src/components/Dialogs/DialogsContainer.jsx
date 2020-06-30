import React from "react";
import {connect} from "react-redux";
import {
  sendMessageCreator
} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

import Dialogs from "./Dialogs";
import {compose} from "redux";


let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage
  }
}
let mapDispatchToProps = {
  sendMessageCreator
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
