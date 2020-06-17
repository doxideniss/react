import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {getMe} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getMe();
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
    getMe
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
