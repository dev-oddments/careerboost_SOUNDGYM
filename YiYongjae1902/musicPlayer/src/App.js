/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Actions, Router, Scene, Tabs, Lightbox} from 'react-native-router-flux';
import Icon from 'react-native-ionicons';

import ForYou from './screens/ForYou';
import Main from './screens/Main';
import Player from './screens/Player';
import MiniPlayer from './screens/MiniPlayer';
import AlbumScreen from './screens/AlbumScreen';
import PlaylistScreen from './screens/PlaylistScreen';

const musicIcon = () => (
  <Icon name="musical-notes" style={{fontSize: 20, color: 'gray'}} />
);
const playlistIcon = () => (
  <Icon name="list" style={{fontSize: 20, color: 'gray'}} />
);
const albumIcon = () => (
  <Icon name="albums" style={{fontSize: 20, color: 'gray'}} />
);
const heartIcon = () => (
  <Icon name="heart" style={{fontSize: 20, color: 'gray'}} />
);
export default class App extends Component {
  render() {
    return (
      <Router hideNavBar="true">
        <Lightbox>
          <Tabs>
            <Scene
              title="보관함"
              key="main"
              component={Main}
              initial={true}
              icon={musicIcon}
            />
            <Scene
              title="Playlist"
              key="Playlist"
              component={PlaylistScreen}
              icon={playlistIcon}
            />
            <Scene
              title="Album"
              key="Album"
              component={AlbumScreen}
              icon={albumIcon}
            />
            <Scene
              title="ForYou"
              key="foryou"
              component={ForYou}
              initial={false}
              icon={heartIcon}
            />
          </Tabs>
          <Scene key="popPlayer" component={Player} />
          <Scene key="MinimizePlayer" component={MiniPlayer} />
        </Lightbox>
      </Router>
    );
  }
}
