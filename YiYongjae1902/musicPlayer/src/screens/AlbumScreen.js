import React, {Component} from 'react';

import {
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';

import {Card, CardItem, Col, Content, Grid} from 'native-base';
import {Actions} from 'react-native-router-flux';
import musicList from '../assets/musicList.json';
import Icon from 'react-native-ionicons';

export default class AlbumScreen extends Component {
  componentDidMount() {}

  _renderList() {
    let listComplete = musicList.map((of, rowKey) => {
      return (
        <View style={styles.child}>
          <Image style={styles.childImage} source={{uri: of.artwork}} />
          <View style={styles.text}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{of.title}</Text>
            <Text style={{fontSize: 16, color: 'rgb(154,154,158)'}}>
              {of.artist}
            </Text>
          </View>
        </View>
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
            paddingLeft: 20,
            paddingTop: 10,
            paddingRight: 20,
            backgroundColor: 'rgb(254,255,254)',
          }}>
          <Text style={{fontSize: 35, fontWeight: 'bold'}}>앨범</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 20,
            }}>
            <TouchableHighlight
              title="aa"
              style={{
                height: 45,
                width: '48%',
                backgroundColor: 'rgb(247,248,251)',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => Actions.popPlayer({data: of})}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon style={{fontSize: 19, color:'rgb(234,69,90)'}} name="play" />
                <Text style={{fontSize: 17, color:'rgb(234,69,90)', fontWeight:600}}>  재생</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              title="aa"
              style={{
                height: 45,
                width: '48%',
                backgroundColor: 'rgb(247,248,251)',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => Actions.popPlayer({data: of})}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon style={{fontSize: 26, color:'rgb(234,69,90)'}} name="shuffle" />
                <Text style={{fontSize: 17, color:'rgb(234,69,90)', fontWeight:600}}>  임의 재생</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View style={styles.parent}>
          <View style={styles.child}>
            <Image
              style={styles.childImage}
              source={require('../assets/engine.jpg')}
            />
            <View style={styles.text}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>Aura</Text>
              <Text style={{fontSize: 16, color: 'rgb(154,154,158)'}}>
                IOAH
              </Text>
            </View>
          </View>
          {this._renderList()}
        </View>
      </Content>
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
    borderRadius: 5,

    width: '48%',
    aspectRatio: 0.8,
    marginBottom: 25,
  },
  childImage: {
    borderRadius: 5,

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
