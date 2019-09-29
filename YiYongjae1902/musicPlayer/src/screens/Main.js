import React, {Component} from 'react';

import {Text} from 'react-native';

import {Content, Card, Body, Left, Thumbnail, CardItem} from 'native-base';
import {Actions} from 'react-native-router-flux';
import musicList from '../assets/musicList.json';

export default class main extends Component {
  _renderList() {
    let listComplete = musicList.map((of, rowKey) => {
      return (
        <CardItem
          key={rowKey}
          header
          button
          onPress={() =>
            Actions.push('popPlayer', {
              data: of,
              title: of.title,
              artist: of.artist,
              artwork: of.artwork,
            })
          }>
          <Left>
            <Thumbnail square source={{uri: of.artwork}} />
            <Body>
              <Text>{of.title}</Text>
              <Text note>{of.artist}</Text>
            </Body>
          </Left>
        </CardItem>
      );
    });
    return listComplete;
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
          <CardItem header button onPress={() => Actions.ForYou()}>
            <Text style={{color: 'rgb(218,67,84)'}}>ForYou</Text>
          </CardItem>
        </Card>
        <Card>{this._renderList()}</Card>
      </Content>
    );
  }
}
