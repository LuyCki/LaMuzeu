import React from 'react';
import {StyleSheet, ScrollView, Text } from 'react-native';
import { Tile, List } from 'react-native-elements'

export default class HomeScreen extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <List containerStyle={{}}>
            {
              this.props.home.homeList.map((item, i) => (
                  <Tile
                    containerStyle={{marginBottom: 10}}
                    key={i}
                    imageSrc={item.poza}
                    title={item.titlu}
                    featured
                    caption={item.caption}
                    onPress={() => this.props.navigation.navigate(`${item.titlu}`)}
                    height={200}
                    
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
