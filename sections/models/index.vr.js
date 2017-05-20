import React, { Component } from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  View,
  Text,
  Model
} from 'react-vr';

export default class Basics extends Component {
  render() {
    return (
      <View>
        <Pano source={asset('starry-sky.jpg')}></Pano>
        <Model
          source={{obj: asset('Tree.obj')}}
          texture={'http://i.imgur.com/14HMTcQb.jpg'}
          style={{
            transform: [
              { translate: [0, -1, -3] }
            ]
          }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('Basics', () => Basics);
