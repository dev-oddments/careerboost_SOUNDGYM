import React, {Component} from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';

import {Card, CardItem, Col, Content, Grid} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class AlbumScreen extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.child}>
          <Image
            style={styles.childImage}
            source={require('../assets/engine.jpg')}
          />
          <View style={styles.text}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Aura</Text>
            <Text style={{fontSize: 16, color:'rgb(154,154,158)'}}>IOAH</Text>
          </View>
        </View>
        <View style={styles.child}>
          <Image
            style={styles.childImage}
            source={require('../assets/engine.jpg')}
          />
          <View style={styles.text}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Aura</Text>
            <Text style={{fontSize: 16, color:'rgb(154,154,158)'}}>IOAH</Text>
          </View>
        </View>
        <View style={styles.child}>
          <Image
            style={styles.childImage}
            source={require('../assets/engine.jpg')}
          />
          <View style={styles.text}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Aura</Text>
            <Text style={{fontSize: 16, color:'rgb(154,154,158)'}}>IOAH</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    justifyContent: 'space-between',
  },
  child: {
    borderRadius: 10,

    width: '48%',
    aspectRatio: 0.8,
    marginBottom:25,

    backgroundColor: 'rgb(233,233,238)',
  },
  childImage: {
    borderRadius: 10,

    // margin: '1%',
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
  },
  text: {
    marginLeft: 5,
  },
  baseContainer: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'white',
  },
  cellContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: 30,
    width: 20,
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    height: 300,
  },
  controller: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 65,
    marginRight: 65,
  },
  info: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
  },
  volume: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 30,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
