import React, {Component} from 'react';

import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {
  Card,
  CardItem,
  Col,
  Content,
  Grid,
  Left,
  Thumbnail,
  Body,
} from 'native-base';
import {Actions} from 'react-native-router-flux';
import playlist from '../assets/playlist.json';
import Icon from 'react-native-ionicons';

export default class PlaylistScreen extends Component {
  _renderList() {
    let listComplete = playlist.map((of, rowKey) => {
      console.log(of.title);
      return (
        <TouchableOpacity
          style={styles.parent}
          key={rowKey}
          header
          button
          onPress={() =>
            Actions.push('ListScreen', {
              data: of.info,
              title: of.playlist,
              artwork: of.artwork,
            })
          }>
          <View style={styles.child}>
            <Image
              style={styles.childImage}
              square
              source={{uri: of.artwork}}
            />
          </View>
          <View
            style={{
              paddingLeft: 20,
              flex: 1,
              alignItems: 'flex-start',
              flexDirection: 'column',
            }}>
            <Text style={{fontSize: 17, fontWeight: 600}}>{of.playlist}</Text>
            <Text
              style={{fontSize: 15, color: 'rgb(145,145,150)', paddingTop: 5}}>
              {of.playlist}
            </Text>
          </View>
          <Icon
            name="arrow-forward"
            style={{fontSize: 20, color: 'rgb(235,235,239)', paddingRight: 15}}
          />
        </TouchableOpacity>
      );
    });
    return listComplete;
  }

  render() {
    return (
      <Content style={{backgroundColor: 'rgb(254,255,254)'}}>
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 35,
              fontWeight: 'bold',
              paddingTop: 10,
              paddingBottom: 10,
            }}>
            플레이리스트
          </Text>
          <View>{this._renderList()}</View>
        </View>
      </Content>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
  },
  parent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  child: {
    borderRadius: 5,

    width: '27%',
    aspectRatio: 1,
    marginBottom: 20,
  },
  childImage: {
    borderRadius: 5,
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
