/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Actions, Router, Scene, Tabs, Lightbox} from 'react-native-router-flux';
import ForYou from './screens/ForYou';
import Main from './screens/Main';
import Player from './screens/Player';
import MiniPlayer from './screens/MiniPlayer';

export default class App extends Component {
  render() {
    return (
      <Router hideNavBar="true">
        <Lightbox>
          <Tabs>
            <Scene title="보관함" key="main" component={Main} initial={true} />
            <Scene
              title="For You"
              key="foryou"
              component={ForYou}
              initial={false}
            />
          </Tabs>

          {/* <Scene
            key="player"
            component={Player}
            title="PageTwo"
            onEnter={Actions.modalView}
          /> */}
          <Scene key="popPlayer" component={Player} />
          <Scene key="MinimizePlayer" component={MiniPlayer} />

        </Lightbox>
      </Router>
    );
  }
}
