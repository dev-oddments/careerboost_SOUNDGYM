import React, {Component} from 'react';

import {Alert, View, Text, FlatList, Image} from 'react-native';

import {
  Container,
  Content,
  Card,
  Header,
  Body,
  Title,
  Left,
  Thumbnail,
  CardItem,
  ListItem,
  Button,
  Grid,
  Icon,
  Right,
  Col,
} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class main extends Component {
  _renderList() {
    let listComplete = data.map((of, rowKey) => {
      return (
        <CardItem
          key={rowKey}
          header
          button
          onPress={() => Actions.popPlayer({data: of})}>
          <Left>
            <Thumbnail square source={of.artwork} />
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
            onPress={() => Actions.Playlist({data: it})}>
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

const data = [
  {
    id: '0',
    url: require('../assets/last.mp3'),
    title: 'LAST (Feat. FR:EDEN',
    artist: 'Alisha',
    artwork: require('../assets/last.jpg'),
  },
  {
    id: '1',
    url: require('../assets/auaro.mp3'),
    title: 'Aura',
    artist: 'IOAH',
    artwork: require('../assets/auaro.jpg'),
  },
  {
    id: '2',
    url: require('../assets/brazil.mp3'),
    title: 'brazil',
    artist: 'mt.tkovr.',
    artwork: require('../assets/brazil.jpg'),
  },
  {
    id: '3',
    url: require('../assets/channel-57-vol-1.mp3'),
    title: 'channel-57-vol-1',
    artist: 'Coa white',
    artwork: require('../assets/channel-57-vol-1.jpg'),
  },
  {
    id: '4',
    url: require('../assets/contra.mp3'),
    title: 'contra',
    artist: 'H A Y A K E',
    artwork: require('../assets/contra.jpg'),
  },
  {
    id: '5',
    url: require('../assets/engine.mp3'),
    title: 'engine',
    artist: 'xxmaddox',
    artwork: require('../assets/engine.jpg'),
  },

  {
    id: '6',
    url: require('../assets/Jetlag.mp3'),
    title: 'Jetlag',
    artist: 'GGMRecords',
    artwork: require('../assets/Jetlag.jpg'),
  },
];
