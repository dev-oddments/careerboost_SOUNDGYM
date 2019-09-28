import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-ionicons';

import {Card, CardItem, Col, Content, Grid} from 'native-base';
import {Actions} from 'react-native-router-flux';
import MusicJson from '../assets/music.json';

const {height: deviceHeight, width: deviceWidth} = Dimensions.get('window');

export default class PlaylistScreen extends Component {
  componentDidMount() {}

  _renderList() {
    let listComplete = MusicJson.map((of, rowKey) => {
      return (
          <TouchableOpacity style={styles.parent} onPress={() => Actions.ListScreen({data: of.info, backButtonTextStyle:{backgroundColor	:'#FF0000'}})}>
            <View style={styles.child}>
              <Image style={styles.childImage} source={{uri: of.artwork}} />
            </View>
            <View style={styles.textIt}>
              <Text style={{fontSize: 17, fontWeight: '400'}}>
                {of.playlist}
              </Text>
              <Text
                style={{
                  color: 'rgb(146,146,151)',
                  fontSize: 14,
                  fontWeight: '400',
                }}>
                사용자가 추가함
              </Text>
            </View>
            <Icon
              name="arrow-forward"
              style={{
                fontSize: 18,
                color: 'rgb(229,229,233)',
                paddingRight: 20,
              }}
            />
          </TouchableOpacity>
      );
    });
    return listComplete;
  }

  render() {
    return (
      <Content style={{backgroundColor: 'rgb(254,255,254)'}}>
        <View
          style={{
            width: '100%',
            padding: 20,
            backgroundColor: 'rgb(254,255,254)',
          }}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>플레이리스트</Text>
        </View>

        <View style={styles.upParent}>{this._renderList()}</View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  upParent: {
    paddingLeft: 20,
  },
  parent: {
    paddingBottom: 15,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  child: {
    borderRadius: 5,
    width: '28%',
    aspectRatio: 1,
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
  textIt: {
    paddingLeft: 20,
    flex: 1,
    flexDirection: 'column',
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
