import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import RegisterScreen from '../components/RegisterScreen'
import { continueAsGuest, facebookLogin } from "../action/registerAction";

class Register extends React.Component {
  render(){
    return <RegisterScreen {...this.props} />
  }
}
export default connect(
  state => ({
      //States
    register: state.register
  }),
  dispatch => {
    return bindActionCreators({
        // Actiuni
        continueAsGuest,
        facebookLogin
    }, dispatch);
  }
)(Register);