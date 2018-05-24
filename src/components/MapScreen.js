import React from 'react';
import { View, StyleSheet, TouchableNativeFeedback, Linking } from 'react-native';
import firebase from 'react-native-firebase'
import MapView, {Marker, Callout} from 'react-native-maps';

import { Button, List, ListItem, Rating, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class MapScreen extends React.Component {


  componentWillMount() {
    this.props.takeMapList()
  }
  
  render() {
    return (
      <View style={styles.container}>
        <MapView
        style={styles.map}
        initialRegion={{
          latitude: 45.651893,
          longitude:  25.599069,
          latitudeDelta: 0.046,
          longitudeDelta: 0.046,
        }}
      >
      {this.props.map.markers.map((marker, i) => (
        <Marker
          key={i}
          coordinate={marker.markers.latlng}
          title={marker.markers.title}
        >
        <Callout onPress={() => Linking.openURL(marker.adresaHarta)}>
          <View style={styles.callout}>
          <Text style={styles.titlu}>{marker.markers.title}</Text>
          <View style={styles.cardAction}>
            <View style={styles.cardActionLabel}>
              <Text style={styles.cardActionText}>
                {marker.adresa}
              </Text>
              <Text style={styles.cardActionSubtitleText}>
                Spre locație
              </Text>
            </View>
            <Icon name="chevron-right" size={30} color="#b8c3c9" />
          </View>
        <List containerStyle={{marginBottom: 10, marginTop: 10}}>
            <ListItem
              hideChevron
              title={marker.orar}
              leftIcon={{name: 'clock', type: 'evilicon'}}
            />
            <ListItem
              hideChevron
              title={'Pret: ' + marker.pret}
              leftIcon={{name: 'price-tag', type: 'entypo'}}
            />
        </List>
          </View>
        </Callout>
        </Marker>
      ))}
      </MapView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  callout: {
    width: 300, 
    height: 180,
  },
  cardAction: {
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  cardActionLabel: {
    flex: 1,
    paddingHorizontal: 12,
  },
  cardActionText: {
    fontSize: 13,
    color: '#c0392b',
  },
  cardActionSubtitleText: {
    fontSize: 12,
    marginTop: -1,
    color: '#9E9E9E',
  },
  cardLabel: {
    marginTop: 20,
    paddingLeft: 8,
  },
  cardLabelText: {
    fontSize: 6,
    color: '#313131',
    fontWeight: '500',
  },
  titlu: {
    fontSize: 18,
    fontWeight: '600',
    borderBottomWidth: 1,
    padding: 5,
  }
});