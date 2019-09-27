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

export default class AlbumScreen extends Component {
  componentDidMount() {}

  _renderList() {
    let listComplete = data.map((of, rowKey) => {
      return (
        <View style={styles.child}>
          <Image style={styles.childImage} source={of.artwork} />
          <View style={styles.text}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{of.title}</Text>
            <Text style={{fontSize: 16, color: 'rgb(154,154,158)'}}>
              {of.artist}}
            </Text>
          </View>
        </View>
      );
    });
    return listComplete;
  }

  render() {
    return (
      <Content>
        <View style={{width: '100%', padding: 20, backgroundColor: 'rgb(254,255,254)'}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>앨범</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop:20,}}>
            <TouchableHighlight
              title="aa"
              style={{height: 40, width: "48%", backgroundColor:"rgb(247,248,251)", borderRadius:10, justifyContent:"center", alignContent:"center"}}
              onPress={() => Actions.popPlayer({data: of})}>
                  <Text>재생</Text>
              </TouchableHighlight>
            <Button
              title="bb"
              style={{height: 50, color: 'orange'}}
              onPress={() => Actions.popPlayer({data: of})}></Button>
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
    borderRadius: 10,

    width: '48%',
    aspectRatio: 0.8,
    marginBottom: 25,

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
