import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MapScreen from '../components/MapScreen'
import {takeMapList} from '../action/mapAction'

class Map extends React.Component {
  render(){
    return <MapScreen {...this.props} />
  }
}
export default connect(
  state => ({
    map:state.map,
  }),
  dispatch => {
    return bindActionCreators({
      takeMapList
    }, dispatch);
  }
)(Map);