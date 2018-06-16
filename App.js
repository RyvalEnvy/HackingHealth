import React, { Component } from 'react';
import { Text, Image, View} from 'react-native';
import {StackNavigator} from 'react-navigation';

//setting up react-navigation

const App = StackNavigator({
  FrontPage : {screen: FrontPage},
  PlanPage: {screen: PlanPage},
  ConnectPage: {screen: ConnectPage},
  ResourcesPage: {screen: ResourcesPage},
  GoalsPage: {screen: GoalsPage},
  DailyReflectionPage: {screen: DailyReflectionPage},
  SettingsPage: {screen: SettingsPage}
});

export default class FrontPage extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
    <View style={{flex:1, flexWrap:'wrap', backgroundColor:'black'}}>
      <Image
        source={require('./Connect.jpg')}
        style={{ height:'33.33%',width:'50%'}}
        OnPress ={() =>
          navigate('ConnectPage')
          }
        />
      <Image
        source={require('./DailyReflection.jpg')}
        style={{ height:'33.33%',width:'50%'}}
        OnPress ={() =>
          navigate('DailyReflectionPage')
          }
        />
      <Image
        source={require('./Plan.jpg')}
        style={{ height:'33.33%',width:'50%'}}
        OnPress ={() =>
          navigate('PlanPage')
          }
        />
      <Image
        source={require('./OTGoals+Progress.jpg')}
        style={{ height:'33.33%',width:'50%'}}
        OnPress ={() =>
          navigate('GoalsPage')
          }
        />
      <Image
        source={require('./Resources.jpg')}
        style={{ height:'33.33%',width:'50%'}}
        OnPress ={() =>
          navigate('ResourcesPage')
          }
        />
      <Image
        source={require('./Settings.jpg')}
        style={{ height:'33.33%',width:'50%'}}
        OnPress ={() =>
          navigate('SettingsPage')
          }
        />
    </View>
    );
  }
}

