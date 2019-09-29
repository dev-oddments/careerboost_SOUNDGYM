import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import {Content} from 'native-base';
import {Actions} from 'react-native-router-flux';
import playlist from '../assets/playlist.json';
import Icon from 'react-native-ionicons';

export default class PlaylistScreen extends Component {
  _renderList(of, rowKey) {
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
          <Image style={styles.childImage} square source={{uri: of.artwork}} />
        </View>
        <View
          style={{
            paddingLeft: 20,
            flex: 1,
            alignItems: 'flex-start',
            flexDirection: 'column',
          }}>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>{of.playlist}</Text>
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
          <FlatList
            data={playlist}
            renderItem={({item, index}) => this._renderList(item, index)}
          />
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
});
