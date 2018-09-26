/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from "react-redux";

import store from "./redux/store";

import PodCastView from './containers/PodCastView' 

import * as firebase from 'firebase'
const firebaseConfig ={
     apiKey: "AIzaSyAVpoR6ANtoQdIWI-d40Qf4yiKxujlqWhM",
    authDomain: "podcastkth.firebaseapp.com",
    databaseURL: "https://podcastkth.firebaseio.com",
    projectId: "podcastkth",
    storageBucket: "",
    messagingSenderId: "512162626154"
}

firebase.initializeApp(firebaseConfig )


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View >
          <PodCastView />
        </View>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('PodcastKTH', () => App);
