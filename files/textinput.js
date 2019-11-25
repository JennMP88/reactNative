import React, { Component } from "react";
import {
  Platform, //allows you to render diff info according to platform
  StyleSheet, //css of react native
  Text, //renders text to display on app
  View, //box where all other components are in
  Image,
  TextInput
} from "react-native";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      username:"",
      password:""
    };
    this.handleUsernameText = this.handleUsernameText.bind(this);
    this.handlePasswordText = this.handlePasswordText.bind(this);
  }
  handleUsernameText(newText) {
    this.setState({
      username: newText
    });
  }

  handlePasswordText(newText) {
    this.setState({
      password: newText
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Username</Text>
        <TextInput
          style={styles.inputbox}
          defaultValue={this.state.username}
          onChangeText={this.handleUsernameText}
        />

        <Text>Password</Text>
        <TextInput
          style={styles.inputbox}
          defaultValue={this.state.password}
          onChangeText={this.handlePasswordText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },
  inputbox: {
    borderBottomColor: "blue",
    borderBottomWidth: 2,
    padding:20
  }
});