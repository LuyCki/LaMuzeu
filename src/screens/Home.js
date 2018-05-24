import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import HomeScreen from '../components/HomeScreen'

class Home extends React.Component {
  render(){
    return <HomeScreen {...this.props} />
  }
}
export default connect(
  state => ({
    home:state.home,
  }),
  dispatch => {
    return bindActionCreators({

    }, dispatch);
  }
)(Home);