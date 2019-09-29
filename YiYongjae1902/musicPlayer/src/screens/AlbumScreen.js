import React, {Component} from 'react';

import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import {Content} from 'native-base';
import {Actions} from 'react-native-router-flux';
import musicList from '../assets/musicList.json';
import Icon from 'react-native-ionicons';

export default class AlbumScreen extends Component {
  _renderList() {
    let listComplete = musicList.map((of, rowKey) => {
      return (
        <View key={rowKey} style={styles.child}>
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
              onPress={() =>
                Actions.push('popPlayer', {
                  data: musicList,
                  title: musicList[0].title,
                  artist: musicList[0].artist,
                  artwork: musicList[0].artwork,
                })
              }>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  style={{fontSize: 19, color: 'rgb(234,69,90)'}}
                  name="play"
                />
                <Text
                  style={{
                    fontSize: 17,
                    color: 'rgb(234,69,90)',
                    fontWeight: 'bold',
                  }}>
                  {' '}
                  재생
                </Text>
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
              onPress={() =>
                Actions.push('popPlayer', {
                  data: musicList,
                  title: musicList[0].title,
                  artist: musicList[0].artist,
                  artwork: musicList[0].artwork,
                })
              }>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  style={{fontSize: 26, color: 'rgb(234,69,90)'}}
                  name="shuffle"
                />
                <Text
                  style={{
                    fontSize: 17,
                    color: 'rgb(234,69,90)',
                    fontWeight: 'bold',
                  }}>
                  {' '}
                  임의 재생
                </Text>
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
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
  },
  text: {
    marginLeft: 5,
  },
});
