import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ListaMuzeeScreen from '../../components/Muzee/ListaMuzeeScreen'
import {takeMuzeeList} from '../../action/muzeeAction'

class ListaMuzee extends React.Component {
  render(){
    return <ListaMuzeeScreen {...this.props} />
  }
}
export default connect(
  state => ({
    muzee:state.muzee,
  }),
  dispatch => {
    return bindActionCreators({
      takeMuzeeList
    }, dispatch);
  }
)(ListaMuzee);