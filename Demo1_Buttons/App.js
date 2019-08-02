//Below is a template to make linking pages.
//Our goal for this morning is to get an application that uses buttons, text, Style, and view to move from one page to another
//As we discussed the first day, many of our applications are comprised of just a series of buttons
//As we learned with HTML, CSS, and JS, the websites we visit and applications we use are really just a basic framework with lots of style added to it
//Everyone of your applications in someway involves the button component, and the changing of pages
//Take the code below, and try and adapt it so that you have an application that can move between different screens.
//This application should serve as an 'early-stage' of your final applications that you all are hoping to design
//Make sure to think of the user experience
//Once you have completed this task, please move on to demo 2.

import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
//to install react-navigation you can use npm install --save react-navigation

class HomeScreen extends React.Component {//using class allows your to create different buttons on the screen, as well as render different information
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        //insert content for homescreen here
        <Text>Home Screen</Text>
        <Button
          title="Go to Page2"
          onPress={() => this.props.navigation.navigate('Page2')}//navigate to 'Page2' //the text in green should match the part in red on the section that says createAppContainer
        /> //use this button text to create your linkage from one page to another
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


});
