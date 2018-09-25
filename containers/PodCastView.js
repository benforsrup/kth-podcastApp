import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  PanResponder,
  ScrollView,
  Image,
  Slider
} from "react-native";
import Comments from '../components/Comments/Comments'
import Player from '../components/Player/Player'
class PodCastView extends Component {

  render() {
    return (
        <View >      
          <Player />
          <Comments />
        </View>
    );
  }
}
export default PodCastView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});