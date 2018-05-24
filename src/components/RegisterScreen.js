import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { Button } from 'react-native-elements';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'react-native-firebase';

export default class RegisterScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                style={{
                    width: 300,
                    height: 400,
                    marginBottom: 0,
                }}
                resizeMode="contain"
                source={require('../assets/images/logo.png')}
                />

                <Button
                title="Autentificare cu Facebook"
                onPress={() => this.props.facebookLogin()}
                loading={this.props.register.isLoadingFacebook}
                loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
                titleStyle={{ fontWeight: "700" }}
                buttonStyle={{
                    backgroundColor: "#3b5998",
                    width: 300,
                    height: 45,
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderRadius: 5
                }}
                containerStyle={{ marginTop: 20 }}
                />

                <Button
                title="Continuați ca vizitator"
                onPress={() => this.props.continueAsGuest()}
                loading={this.props.register.isLoadingVizitator}
                loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
                titleStyle={{ fontWeight: "700" }}
                buttonStyle={{
                    marginTop: 15,
                    backgroundColor: "#c9985f",
                    width: 300,
                    height: 45,
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderRadius: 5
                }}
                containerStyle={{ marginTop: 20 }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  