import React, {Component} from 'react';

import {Alert, View, Text} from 'react-native';

import {Card, CardItem, Col, Content, Grid} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class foryou extends Component {
  componentDidMount() {
    this._showAlert();
  }
  _showAlert = () => {
    Alert.alert(
      'ForYou 탭이 구현되지 않음',
      '빠른 시일내에 작업 완료하겠습니다.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  };

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
