
import firebase from 'react-native-firebase'

export const takeMapList = () => {
    return dispatch => {
      firebase.database().ref('/LaMuzeu/0/Muzee').once('value')
      .then((snapshot) => {
        dispatch({type:'TAKE_MARKERS_LIST', payload: snapshot.val()});
      })
    }
  }