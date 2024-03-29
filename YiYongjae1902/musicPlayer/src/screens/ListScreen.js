import React, {Component} from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
} from 'react-native';

import {Content} from 'native-base';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-ionicons';

export default class ListScreen extends Component {
  _renderList(of, rowKey) {
    return (
      <TouchableOpacity
        style={styles.parent}
        key={rowKey}
        header
        button
        onPress={() =>
          Actions.push('popPlayer', {
            data: this.props.data[rowKey],
            title: this.props.data[rowKey].title,
            artist: this.props.data[rowKey].artist,
            artwork: this.props.data[rowKey].artwork,
          })
        }>
        <View style={styles.child}>
          <Image style={styles.childImage} square source={{uri: of.artwork}} />
        </View>
        <View
          style={{
            paddingLeft: 20,
            flex: 1,
            alignItems: 'flex-start',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <View style={{flex: 1, paddingTop: 5}}>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>{of.title}</Text>
            <Text style={{fontSize: 13, color: 'rgb(145,145,150)'}}>
              {of.artist}
            </Text>
          </View>
        </View>
        <Icon
          name="arrow-forward"
          style={{fontSize: 20, color: 'rgb(235,235,239)', paddingRight: 15}}
        />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Content style={{backgroundColor: 'rgb(254,255,254)'}}>
        <View style={{paddingLeft: 20, paddingTop: 5}}>
          <View style={styles.parent} header button>
            <View style={styles.childTop}>
              <Image
                style={styles.childImage}
                square
                source={{uri: this.props.artwork}}
              />
            </View>
            <View
              style={{
                paddingLeft: 20,
                flex: 1,
                alignItems: 'flex-start',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
              <View style={{flex: 1, paddingTop: 5}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  {this.props.title}
                </Text>
                <Text style={{fontSize: 15, color: 'rgb(145,145,150)'}}>
                  {this.props.title}
                </Text>
              </View>
            </View>
            <Icon
              name="arrow-forward"
              style={{
                fontSize: 20,
                color: 'rgb(235,235,239)',
                paddingRight: 15,
              }}
            />
          </View>
        </View>
        <View
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableHighlight
              title="aa"
              style={{
                height: 45,
                width: '48%',
                backgroundColor: 'rgb(247,248,251)',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() =>
                Actions.push('popPlayer', {
                  data: this.props.data[0],
                  title: this.props.data[0].title,
                  artist: this.props.data[0].artist,
                  artwork: this.props.data[0].artwork,
                })
              }>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  style={{fontSize: 19, color: 'rgb(234,69,90)'}}
                  name="play"
                />
                <Text
                  style={{
                    fontSize: 17,
                    color: 'rgb(234,69,90)',
                    fontWeight: 'bold',
                  }}>
                  {' '}
                  재생
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              title="aa"
              style={{
                height: 45,
                width: '48%',
                backgroundColor: 'rgb(247,248,251)',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => Actions.popPlayer({data: of})}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  style={{fontSize: 26, color: 'rgb(234,69,90)'}}
                  name="shuffle"
                />
                <Text
                  style={{
                    fontSize: 17,
                    color: 'rgb(234,69,90)',
                    fontWeight: 'bold',
                  }}>
                  임의 재생
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.container}>
          <FlatList
            data={this.props.data}
            renderItem={({item, index}) => this._renderList(item, index)}
          />
        </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
  },
  parent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  childTop: {
    borderRadius: 5,
    width: '36%',
    aspectRatio: 1,
    marginBottom: 15,
  },
  child: {
    borderRadius: 5,

    width: '13%',
    aspectRatio: 1,
    marginBottom: 15,
  },
  childImage: {
    borderRadius: 5,
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
  },
});
