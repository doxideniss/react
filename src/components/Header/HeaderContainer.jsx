import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import axios from "axios"
import {setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.getMe()
          .then(data => {
              if (!data.resultCode) {
                  const {id, email, login} = data.data
                  this.props.setAuthUserData(id, email, login)
              }
          })
    }

    render() {
        return (
          <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

const mapDispatchToProps = {
    setAuthUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)