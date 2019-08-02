import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
//to install react-navigation you can use npm install --save react-navigation



class HomeScreen extends React.Component {//using class allows your to create different buttons on the screen, as well as render different information
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Page1')}//navigate to 'Details'
        />
      </View>
    );
  }
}

class Page1Screen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> //Content for the page must be added between the Views

//insert content for page 2 here

      <Text>Page 2</Text>
      <Button
        title="Go to Page2"
        onPress={() => this.props.navigation.navigate('Home')}//navigate to 'Home' //the text in green should match the part in red on the section that says createAppContainer
      /> //use this button text to create your linkage from one page to another
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

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}



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
