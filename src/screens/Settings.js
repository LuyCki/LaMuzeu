import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SettingsScreen from '../components/SettingsScreen'
import { handlePressSignOut, checkUser } from "../action/registerAction";

class Settings extends React.Component {
  render(){
    return <SettingsScreen {...this.props} />
  }
}
export default connect(
  state => ({
    register:state.register,
  }),
  dispatch => {
    return bindActionCreators({
      handlePressSignOut,
      checkUser
    }, dispatch);
  }
)(Settings);