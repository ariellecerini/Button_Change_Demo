import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text>Home Screen</Text>
        <Button
          title="Go to Page2"
          onPress={() => this.props.navigation.navigate('Page2')}//navigate to 'Page2' //the text in green should match the part in red on the section that says createAppContainer
        />
      </View>
    );
  }
}

class Page2Screen extends React.Component { //if you would like to make multiple pages you can do so by copying this section and changing where it says Page2Screen
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

//if you would like to make any additional pages you can copy page 2 and just change the marked


const RootStack = createStackNavigator(
  {

    //list out your pages and there classes here. If you add any pages you are going to need to change the information that you have here. Same with if you change any names of the classes
    Home: HomeScreen, //should match what you are referring to as the homescreen
    Page2: Page2Screen, //should match what you are referring to as Page2

  //add any additional pages here. be sure the info matches how you are using them above
  },
  {
    initialRouteName: 'Home', //here you declare what the initial loaded page should be
  }
);

//here is where the actual rendering happens. There is nothing more that you need to do here
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
