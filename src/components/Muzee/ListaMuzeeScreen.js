import React from 'react';
import {StyleSheet, ScrollView, Text } from 'react-native';
import { Tile, List } from 'react-native-elements'
import { PacmanIndicator } from 'react-native-indicators'

export default class ListaMuzeeScreen extends React.Component {
  
  componentWillMount() {
    this.props.takeMuzeeList()
  }

  
  aflaMaiMulte = (date) => {
    this.props.navigation.navigate('DetaliMuzeu', {...date})
  }


  render() {
    return this.props.muzee.isLoading === true ? <PacmanIndicator color='#c9985f' size={80} /> : (
      <ScrollView style={styles.container}>
        <List>
          {
            this.props.muzee.listaMuzee.sort((a,b) => b.rating - a.rating).map((date, i) => (
              <Tile
              containerStyle={{marginBottom: 10}}
              key={i}
              imageSrc={{uri: date.fotografie}}
              title={date.denumire}
              featured
              onPress={() => this.aflaMaiMulte(date)}
              height={150}
            />
            ))
          }
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
  }
});
