import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DetaliiMuzeuScreen from '../../components/Muzee/DetaliiMuzeuScreen'

class DetaliiMuzeu extends React.Component {
  render(){
    return <DetaliiMuzeuScreen {...this.props} />
  }
}
export default connect(
  state => ({
  
  }),
  dispatch => {
    return bindActionCreators({

    }, dispatch);
  }
)(DetaliiMuzeu);