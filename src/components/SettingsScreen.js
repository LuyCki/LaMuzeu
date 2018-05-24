import React from 'react';
import { View, StyleSheet, TouchableNativeFeedback, Text,  } from 'react-native';
import { Header } from 'react-native-elements'
import IconVect from 'react-native-vector-icons/MaterialCommunityIcons';

import firebase from 'react-native-firebase';

import { List, ListItem } from 'react-native-elements'
import { Icon } from 'react-native-elements'

export default class SettingsScreen extends React.Component {
  
  componentWillMount() {
    this.props.checkUser()
  }

  render() {
    const isLogIn = this.props.register.user.isVizitator

    const avatar = isLogIn 
    ? (<List containerStyle={{marginBottom: 20, marginTop: 5}}>
      {
          <ListItem
            hideChevron
            title={"  Vizitator"}  
            leftIcon={<Icon name="user" type="font-awesome"/>}
          />
      }
    </List>)
    : (<List containerStyle={{marginBottom: 20, marginTop: 5}}>
      {
          <ListItem
            hideChevron
            roundAvatar
            avatar={{uri: this.props.register.user.photo}}
            title={this.props.register.user.displayName}
            subtitle={this.props.register.user.email}
          />
      }
    </List>) 

    return (
      <View style={styles.container}>
        <Header
          placement='false'
          backgroundColor='#c9985f'
          outerContainerStyles= {styles.outerContainer}
          innerContainerStyles= {styles.innerContainer}
          centerComponent={{ text: 'Setări', style: { color: '#ecf0f1', fontWeight: '600', fontSize: 23 } }}
        />
        {avatar}
        
        <View style={styles.cardLabel}>
        <Text style={styles.cardLabelText}>
          Contul tău
        </Text>
      </View>

        <View style={styles.card}>
          <TouchableNativeFeedback
            onPress={() => this.props.handlePressSignOut()}
            underlayColor="#eee">
            <View style={[styles.cardBody, {flexDirection: 'row'}]}>
              <IconVect
                name="exit-to-app"
                type="MaterialCommunityIcons"
                size={25}
                style={{transform: [{rotate: '180deg'}]}}
              />

              <Text style={styles.signOutText}>Deconectează-te</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
  },
  innerContainer: {
    alignItems: 'center'
  },
  outerContainer: {
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 1,
    height: 60,
  },
  card: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#E8E8E8',
    backgroundColor: '#fff',
  },
  cardBody: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  cardLabel: {
    marginTop: 20,
    paddingLeft: 8,
    paddingBottom: 5,
  },
  cardLabelText: {
    fontSize: 15,
    color: '#313131',
  },
  signOutText: {
    fontSize: 15,
    marginLeft: 8,
    marginTop: 1,
  },
});