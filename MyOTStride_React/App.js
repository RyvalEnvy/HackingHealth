import React, { Component } from 'react';
import { Text, Image, View} from 'react-native';
export default class FrontPage extends Component {
  render() {
    return (
    <View style={{flex:1, flexWrap:'wrap', backgroundColor:'black'}}>
      <Image source={require('./Connect.jpg')} style={{ height:'33.33%',width:'50%'}}/>
      <Image source={require('./DailyReflection.jpg')} style={{ height:'33.33%',width:'50%'}}/>
      <Image source={require('./Plan.jpg')} style={{ height:'33.33%',width:'50%'}}/>
      <Image source={require('./OTGoals+Progress.jpg')} style={{ height:'33.33%',width:'50%'}}/>
      <Image source={require('./Resources.jpg')} style={{ height:'33.33%',width:'50%'}} />
      <Image source={require('./Settings.jpg')} style={{ height:'33.33%',width:'50%'}}/>
    </View>
    );
  }
}

