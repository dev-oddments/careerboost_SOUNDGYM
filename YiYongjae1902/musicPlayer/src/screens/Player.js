import React from 'react';
import {Image, View, StyleSheet, TouchableOpacity, Slider} from 'react-native';
import Icon from 'react-native-ionicons';
import {Text, Button} from 'native-base';
import {Actions} from 'react-native-router-flux';
import TrackPlayer from 'react-native-track-player';

import ImageResize from '../components/ImageResize';
import ProgressNow from '../components/ProgressNow';

export default class player extends TrackPlayer.ProgressComponent {
  state = {
    Volume: 60,
    isPlay: 'pause',
  };

  componentDidMount() {
    TrackPlayer.setupPlayer().then(async () => {
      TrackPlayer.reset();
      TrackPlayer.add(this.props.data);
      TrackPlayer.play();
    });
  }

  _togglePlay() {
    if (this.state.isPlay === 'play') {
      TrackPlayer.play();
      this.setState({isPlay: 'pause'});
    } else {
      TrackPlayer.pause();

      this.setState({isPlay: 'play'});
    }
  }
  _getRewind() {
    // Add condition about before music exist
    TrackPlayer.seekTo(0);
    TrackPlayer.pause();

    this.setState({isPlay: 'play'});
  }

  _getFastForward() {}

  render() {
    return (
      <View style={styles.baseContainer}>
        <View style={styles.closeButton}>
          <TouchableOpacity
            onPress={() => {
              Actions.MinimizePlayer({data: this.props.data, isPlay: this.state.isPlay});
            }}>
            <Icon name="arrow-down" style={{fontSize: 45, color: 'gray'}} />
          </TouchableOpacity>
        </View>
        <View style={styles.image}>
          <ImageResize
            img={this.props.data.artwork}
            isPlay={this.state.isPlay}
          />
        </View>
        <ProgressNow />
        <View style={styles.info}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>
            {this.props.data.title}
          </Text>
          <Text style={{fontSize: 20, color: 'rgb(218,67,84)'}}>
            {this.props.data.artist}
          </Text>
        </View>
        <View style={styles.controller}>
          <TouchableOpacity onPress={() => this._getRewind()}>
            <Icon name="rewind" style={{fontSize: 40}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._togglePlay()}>
            <Icon name={this.state.isPlay} style={{fontSize: 55}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
            <Icon name="fastforward" style={{fontSize: 40}} />
          </TouchableOpacity>
        </View>
        <View style={styles.volume}>
          <Icon name="volume-mute" style={{fontSize: 20}} />
          <Slider
            minimumValue={0}
            maximumValue={100}
            thumbTintColor="white"
            thumbStyle={styles.thumbShadow}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#808080"
            step={1}
            onValueChange={val => {
              this.setState({Volume: val});
              TrackPlayer.setVolume(val / 100);
            }}
            onSlidingComplete={val => {
              this.setState({Volume: val});
              TrackPlayer.setVolume(val / 100);
            }}
            style={{width: '90%'}}
            value={this.state.Volume}
          />
          <Icon name="volume-high" style={{fontSize: 20}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  baseContainer: {
    flex: 11,

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
  closeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
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

TrackPlayer.registerEventHandler(require('../service.js'));
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
