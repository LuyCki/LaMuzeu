
import firebase from 'react-native-firebase'

export const takeMuzeeList = () => {
    return dispatch => {
      dispatch({type:'MUZEE_IS_LOADING', payload: true});

      firebase.database().ref('/LaMuzeu/0/Muzee').once('value')
      .then((snapshot) => {
        dispatch({type:'TAKE_MUZEE_LIST', payload: snapshot.val()});
        dispatch({type:'MUZEE_IS_LOADING', payload: false});
      })
    }
  }