import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  // VideoPano,
  Text,
  View,
} from 'react-vr';

export default class newapp extends React.Component {
  render() {
    return (
      <View>
        {/* <VideoPano playerState={this.state.playerState} 
            source={ asset(videoUrl, { layout: 'SPHERE' }) } /> */}
        <Pano source={asset('world2.jpg')}/>
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('newapp', () => newapp);
