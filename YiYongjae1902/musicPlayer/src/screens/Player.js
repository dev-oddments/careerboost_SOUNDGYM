import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Slider,
  Dimensions,
  Animated,
} from 'react-native';
import Icon from 'react-native-ionicons';
import {Text, Button} from 'native-base';
import {Actions} from 'react-native-router-flux';
import TrackPlayer from 'react-native-track-player';

import ImageResize from '../components/ImageResize';
import ProgressNow from '../components/ProgressNow';

const {height: deviceHeight, width: deviceWidth} = Dimensions.get('window');

export default class player extends TrackPlayer.ProgressComponent {
  state = {
    Volume: 60,
    isPlay: 'pause',
    offset: new Animated.Value(deviceHeight),

    artist: '',
    title: '',
    artwork: '',
  };

  componentDidMount() {
    console.log(this.props.title);
    console.log(this.props.artist);

      // console.log(this.props.data.title);
    
    // this.setState({
    //   artist: hello.artist,
    //   title:
    // })
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: 0,
    }).start();

    TrackPlayer.setupPlayer().then(async () => {
      TrackPlayer.reset();
      TrackPlayer.add(this.props.data);
      TrackPlayer.play();
      // console.log(TrackPlayer.getCurrentTrack(id))
      // const track = await TrackPlayer.getTrack();
      // this.setState({artist: track.title});
    });
  }

  _closeModal() {
    Animated.timing(this.state.offset, {
      duration: 150,
      toValue: deviceHeight,
    }).start(Actions.pop);
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
      <Animated.View style={{transform: [{translateY: this.state.offset}], backgroundColor:'rgb(254,255,254)'}}>
        <View style={styles.baseContainer}>
          <View style={styles.closeButton}>
            <TouchableOpacity
              onPress={() => {
                this._closeModal();
              }}>
              <Icon name="arrow-down" style={{fontSize: 45, color: 'gray'}} />
            </TouchableOpacity>
          </View>
          <View style={styles.image}>
            <ImageResize img={this.props.artwork} isPlay={this.state.isPlay} />
          </View>
          <ProgressNow isPlay={this.state.isPlay}/>
          <View style={styles.info}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>
              {this.props.title}
            </Text>
            <Text style={{fontSize: 20, color: 'rgb(218,67,84)'}}>
              {this.props.artist}
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
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  baseContainer: {
    height: deviceHeight * 0.9,
    width: deviceWidth * 1,
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
