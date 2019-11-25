import React, { Component } from "react";
import {
  Platform, //allows you to render diff info according to platform
  StyleSheet, //css of react native
  Text, //renders text to display on app
  View, //box where all other components are in
  Image
} from "react-native";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.half1}>
          <Text style={styles.text}>This is 1</Text>
        </View>

        <View style={styles.half2}>
          <View style={[styles.half21, styles.half2x]}>
            <Text style={styles.text}>This is 2/1</Text>
          </View>
          <View style={[styles.half22, styles.half2x]}>
            <Text style={styles.text}>This is 2/2 </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // flexDirection:'row',       makes it into rows
  },
  half1: {
    flex: 1,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center"
  },
  half2: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "blue"
  },
  half2x: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  half21: {
    // flex:2,
    backgroundColor: "grey"
  },
  half22: {
    backgroundColor: "pink"
  },
  text: {
    color: "white",
    fontSize: 30
  }
});