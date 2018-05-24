import React from 'react';
import { Text, View, StyleSheet, Alert, ScrollView, TouchableNativeFeedback, Image, Linking } from 'react-native';
import { Card, Rating, List, ListItem } from 'react-native-elements'
import MapView, {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Entypo';

export default class DetaliiMuzeuScreen extends React.Component {

  componentWillMount() {

  }

  render() {
    const {adresaHarta, markers, denumire, adresa, orar, fotografie, pret } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <MapView
        style={styles.map}
        loadingBackgroundColor="#f9f5ed"
        loadingEnabled={false}
        initialRegion={{
          latitude: markers.latlng.latitude,
          longitude: markers.latlng.longitude,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}>
        <Marker coordinate={markers.latlng} title={denumire} />
        </MapView>
        <TouchableNativeFeedback onPress={() => Linking.openURL(adresaHarta)}>
          <View style={styles.cardAction}>
            <View style={styles.cardActionLabel}>
              <Text style={styles.cardActionText}>
                {adresa}
              </Text>
              <Text style={styles.cardActionSubtitleText}>
                Spre locație
              </Text>
            </View>
            <Icon name="chevron-right" size={30} color="#b8c3c9" />
          </View>
        </TouchableNativeFeedback>
        <View style={styles.cardLabel}>
          <Text style={styles.cardLabelText}>
            Informații:
          </Text>
        </View>
        <List containerStyle={{marginBottom: 20, marginTop: 10}}>
            <ListItem
              hideChevron
              title={orar}
              leftIcon={{name: 'clock', type: 'evilicon'}}
            />
            <ListItem
              hideChevron
              title={'Pret: ' + pret}
              leftIcon={{name: 'price-tag', type: 'entypo'}}
            />
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
  },
  map: {
    height: 150,
    marginTop: 15
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
    color: '#424242',
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
    fontSize: 15,
    color: '#313131',
    fontWeight: '500',
  },
});
