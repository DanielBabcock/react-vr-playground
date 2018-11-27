import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class newapp extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('world.jpg')}/>
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
            {/* <div id="VW_bigMap" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:999999;"> */}
            {/* <div id="VW_backDiv" style="background:#000;filter:alpha(opacity=80);opacity:.8;height:100%;width:100%;position:absolute;top:0px;left:0px;z-index:-1;" onclick="switchFrame('VW_smallMap','VW_bigMap','enlarge','small map','100%','NaNpx',0,-180);return false;"></div></div> */}
            {/* <script type="text/javascript">function switchFrame(a,b,c,d,e,f,g,h){var i=document.getElementById("VW_mCont");var j=document.getElementById("VW_mSwitch").firstChild;if(j.nodeValue==c){j.nodeValue=d}else{j.nodeValue=c}var k=i.parentNode.getAttribute("id");if(k==a){var l=b}else{var l=a}var m=i.parentNode;var n=document.getElementById(l);n.appendChild(i);m.style.display="none";n.style.display="";if(l==a){i.style.width=e;i.style.height=f;i.style.margin=0;i.style.top=""}else{i.style.width="80%";i.style.height="80%";i.style.margin="auto";i.style.top="20px"}window.location.hash="VW_mCont"}</script> */}


        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('newapp', () => newapp);
