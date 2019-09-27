import React, {Component} from 'react';

import {View, Text} from 'react-native';

import {Card, CardItem, Col, Content, Grid} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class AlbumScreen extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Content>
          <Grid>
            <Col style={{backgroundColor: 'rgb(233,233,238)', height: 200}}>
              <Card>
                <CardItem header button onPress={() => Actions.popPlayer()}>
                  <Text style={{color: 'rgb(218,67,84)'}}>노래</Text>
                </CardItem>
              </Card>
            </Col>
            <Col style={{backgroundColor: 'rgb(233,233,238)', height: 200}}>
              <Card>
                <CardItem header button onPress={() => Actions.popPlayer()}>
                  <Text style={{color: 'rgb(218,67,84)'}}>노래</Text>
                </CardItem>
              </Card>
            </Col>
          </Grid>
        </Content>
      </View>
    );
  }
}
