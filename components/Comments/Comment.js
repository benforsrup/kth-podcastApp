import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Button
} from "react-native";

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

class Comments extends Component {
    render() {
        return (
            <View style={styles.commentContainer}>
                <Text> {this.props.data.title} </Text>
                <Text> {this.props.data.user} </Text>
            </View> 
        );
    }
}
export default Comments;

const styles = StyleSheet.create({
    commentContainer :{
      width:SCREEN_WIDTH,
      borderBottomWidth:1,
      
      height:100,
      backgroundColor:'white',
      flex: 1,
      alignItems: 'center',
      justifyContent:'center'
    }
  });