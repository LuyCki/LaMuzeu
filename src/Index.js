import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import IndexScreen from './components/IndexScreen'
import { checkLogIn, continueAsGuest } from './action/registerAction'

class Index extends React.Component {
  render(){
    return <IndexScreen {...this.props} />
  }
}
export default connect(
  state => ({
    register: state.register
  }),
  dispatch => {
    return bindActionCreators({
      checkLogIn
    }, dispatch);
  }
)(Index);