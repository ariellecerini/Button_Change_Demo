//Below is a template to add images to your applications.
//Our goal for this morning is to get an application that uses images, text, Style, and view to move from one page to another
//As we discussed the first day, many of our applications are comprised of just a series of buttons
//As we learned with HTML, CSS, and JS, the websites we visit and applications we use are really just a basic framework with lots of style added to it
//Before beginning this demo please make sure to add a png file to your folders and to make note of where you have placed it
//Once you have completed this task, please move on to demo 3_combining images and buttons.

import React from 'react';
import { Image, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';



//to install react-navigation you can use npm install --save react-navigation

class ImageRender extends React.Component {//using class allows your to create different buttons on the screen, as well as render different information
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

          <Image source = {require('./pup.png')}/>
      </View>
    );
  }
}


      export default class App extends React.Component {
        render() {
          return <ImageRender />;
        }
      }
