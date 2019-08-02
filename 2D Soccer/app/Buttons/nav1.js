import React, {Component} from 'react';
import {Alert, AppRegistry, Button, StyleSheet, View, Text }from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; //used to create the navigation modules


export default class NavOne extends Component{

  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Page1')}//navigate to first page
          title ='press me'
          color ='blue'
        />
      </View>
      );
    }
}


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Page1: Page1Screen,
  },
  {
    initialRouteName: 'Home',
  }
);


  const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
    },
    buttonContainer:{
      margin:20,
      backgroundColor: 'red'
    },
  })
