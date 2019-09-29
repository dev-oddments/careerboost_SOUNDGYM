import React, {Component} from 'react';

import {Text, FlatList} from 'react-native';

import {Content, Card, Body, Left, Thumbnail, CardItem} from 'native-base';
import {Actions} from 'react-native-router-flux';
import musicList from '../assets/musicList.json';

export default class main extends Component {
  _renderList(item) {
    return (
      <CardItem
        header
        button
        onPress={() =>
          Actions.push('popPlayer', {
            data: item,
            title: item.title,
            artist: item.artist,
            artwork: item.artwork,
          })
        }>
        <Left>
          <Thumbnail square source={{uri: item.artwork}} />
          <Body>
            <Text>{item.title}</Text>
            <Text note>{item.artist}</Text>
          </Body>
        </Left>
      </CardItem>
    );
  }

  render() {
    return (
      <Content>
        <Card>
          <CardItem
            style={{borderColor: 'black'}}
            header
            button
            onPress={() => Actions.PlaylistStack()}>
            <Text style={{color: 'rgb(218,67,84)'}}>플레이리스트</Text>
          </CardItem>
          <CardItem header button onPress={() => Actions.Album()}>
            <Text style={{color: 'rgb(218,67,84)'}}>앨범</Text>
          </CardItem>
          <CardItem header button onPress={() => Actions.foryou()}>
            <Text style={{color: 'rgb(218,67,84)'}}>ForYou</Text>
          </CardItem>
        </Card>
        <FlatList
          data={musicList}
          renderItem={({item}) => this._renderList(item)}
        />
      </Content>
    );
  }
}
