
import firebase from 'react-native-firebase'
import { AccessToken, LoginManager } from 'react-native-fbsdk';

export const continueAsGuest = () => {
    return dispatch => {
        dispatch({type:'REGISTER_IS_LOADING_VIZITATOR', payload: true});
        firebase.auth().signInAnonymouslyAndRetrieveData()
        .catch((error) => {
            //Alert.alert(error.message)
        })
        .then(() => {
            dispatch({type:'CHECK_USER', payload: {isVizitator: true}});
            dispatch({type:'REGISTER_IS_LOADING_VIZITATOR', payload: false})
        })
    }
}

export const checkLogIn = () => {
    return dispatch => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              dispatch({type:'IS_LOGED_IN', payload: true});
            } else {
              dispatch({type:'IS_LOGED_IN', payload: false});
            }
        })      
    }
}


export const handlePressSignOut = () => {
    return dispatch => {
        var user = firebase.auth().currentUser;
        // Sterge doar pers anonime
        if (user.email == null) {
        user.delete().catch((error) => {
            // An error happened.
        });
        }
        firebase.auth().signOut().then(() => {
        // Sign-out successful.
        }).catch((error) => {
        });    
    }
}

export const checkUser = () => {
    return dispatch => {
        var user = firebase.auth().currentUser;

        if (user.email != null) {
            let userData = {
                displayName: user.displayName,
                email: user.email,
                photo: user.photoURL,
                isVizitator: false
            }
            dispatch({type:'CHECK_USER', payload: userData});
        }
    }
}

  export const facebookLogin = () => {
    return async dispatch => {
        dispatch({type:'REGISTER_IS_LOADING_FACEBOOK', payload: true});
            try {
              const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
          
              if (result.isCancelled) {
                //throw new Error('Something went wrong obtaining the users access token');
              }
          
              //console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
          
              // get the access token
              const data = await AccessToken.getCurrentAccessToken();
          
              if (!data) {
                //throw new Error('Something went wrong obtaining the users access token'); // Handle this however fits the flow of your app
              }
          
              // create a new firebase credential with the token
              const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
          
              // login with credential
              const currentUser = await firebase.auth().signInWithCredential(credential).then(
        
              );
          
              //console.info(JSON.stringify(currentUser.toJSON()))
            } catch (e) {
        }
        dispatch({type:'REGISTER_IS_LOADING_FACEBOOK', payload: false});
    }
}