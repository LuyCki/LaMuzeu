import React, { Component } from 'react';
import RootNavigation from '../navigation/RootNavigation'
import SplashScreen from 'react-native-splash-screen'
import RegisterScreen from '../screens/Register'

export default class IndexScreen extends Component{
  
  componentDidMount() {
    console.log(this.props)
    
    SplashScreen.hide();
  }

  componentWillMount() {
    this.props.checkLogIn()
  }

  render() {
    if (this.props.register.isLogedIn == false) {
        return (  
            <RegisterScreen />
        );
    } else {
        return (
            <RootNavigation />
        );
    }
  }
}