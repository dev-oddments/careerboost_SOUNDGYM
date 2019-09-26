import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Slider,
  AppRegistry,
  StatusBar,
  StyleSheet,
} from 'react-native';
import TrackPlayer, {
  ProgressComponent,
  useTrackPlayerProgress,
} from 'react-native-track-player';

export default class ProgressNow extends TrackPlayer.ProgressComponent {
  state = {
    isSeeking: false,
  };
  _progressToTime = progress => {
    TrackPlayer.getDuration().then(duration => {
      const time = (duration / 100) * progress * 100;
      TrackPlayer.seekTo(time);
    });
  };
  _currentTime = () => {
    const minute = parseInt(this.state.position / 60)
      .toString()
      .padStart(1, '0');
    const second = parseInt(this.state.position % 60)
      .toString()
      .padStart(2, '0');
    return `${minute}:${second}`;
  };

  render() {
    return (
      <View>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Slider
            minimumValue={0}
            maximumValue={this.state.duration}
            thumbTintColor="gray"
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#808080"
            onValueChange={val => {
              TrackPlayer.pause();
              this.state.seek = val;
              this.state.isSeeking = true;
            }}
            value={this.state.isSeeking ? this.seek : this.state.position}
            style={{width: '80%'}}
            onSlidingComplete={val => {
              TrackPlayer.play();
              this.setState(() => {
                TrackPlayer.seekTo(this.state.seek);
                this.state.position = this.state.seek;
              });
            }}
          />
        </View>
        <View style={styles.time}>
          <Text style={{width: 40}}>{this._currentTime()}</Text>
          <Text style={{width: 40}}>
            {parseInt(this.state.duration / 60) +
              ':' +
              parseInt(this.state.duration % 60)}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  time: {
    height: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 30,
    marginRight: 30,
  },
});
