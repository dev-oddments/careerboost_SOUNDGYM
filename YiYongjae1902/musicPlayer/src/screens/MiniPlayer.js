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
    isPlay: '',
  };
  componentDidMount() {
      console.log(this.props.isPlay)
      this.setState({isPlay: this.props.isPlay})
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
              Actions.main();
            }}>
            <Icon name="arrow-down" style={{fontSize: 45, color: 'gray'}} />
          </TouchableOpacity>
        </View>
        <View style={styles.controller}>
          <Image
            source={this.props.data.artwork}
            style={{width:70, height:70}}
          />
          <Text style={{fontSize: 20}}>
            {this.props.data.title}
          </Text>
          <TouchableOpacity onPress={() => this._togglePlay()}>
            <Icon name={this.state.isPlay} style={{fontSize: 35}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
            <Icon name="fastforward" style={{fontSize: 35}} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  baseContainer: {
    flex: 0.2,

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
    height: 70,
  },
  controller: {
    alignItems: 'center',
    flexDirection: 'row',

    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },
});

TrackPlayer.registerEventHandler(require('../service.js'));