import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {
  useTrackPlayerEvents,
  TrackPlayerEvents,
} from 'react-native-track-player';

const events = [
  TrackPlayerEvents.PLAYBACK_STATE,
  TrackPlayerEvents.PLAYBACK_ERROR,
];

const ImageResize = props => {
  const [playerState, setState] = useState(true);

  useTrackPlayerEvents(events, event => {
    if (event.type === TrackPlayerEvents.PLAYBACK_ERROR) {
      console.warn('An error occured while playing the current track.');
    }
    if (event.type === TrackPlayerEvents.PLAYBACK_STATE) {
      setState(!playerState);
    }
  });

  return (
    <View>
      <Image
        source={{uri: props.img}}
        style={
          props.isPlay == 'play'
            ? {height: 250, aspectRatio: 1}
            : {height: 300, aspectRatio: 1}
        }
      />
    </View>
  );
};

export default ImageResize;
