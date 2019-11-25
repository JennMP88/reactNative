import React, { Component } from "react";
import {
  Platform, //allows you to render diff info according to platform
  StyleSheet, //css of react native
  Text, //renders text to display on app
  View, //box where all other components are in
  Image,
  Button,
  TextInput,
 
} from "react-native";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
    this.buttonPressed=this.buttonPressed.bind(this)
  }
buttonPressed(){
  // UNCONTROLLED
  // const username=this._username._lastNativeText
  // const password=this._password._lastNativeText
  // console.log(username,password)

  //vs controlled
  console.log(this.state.username, this.state.password)
}
 

  render() {
    return (
      <View style={styles.container}>
        <Text>Username</Text>
        <TextInput
              style={styles.inputbox}
         //CONTROLLED COMPONENT
          defaultValue={this.state.username}
          onChangeText={text=>{this.setState({username:text})}}
          // ref={input=>this._username=input} UNCONTROLLED COMPONENT
        />

        <Text>Password</Text>
        <TextInput
          style={styles.inputbox}
          defaultValue={this.state.password}
          onChangeText={text=>{this.setState({password:text})}}
          // ref={input=>this._password=input}
        />
        <View style={styles.buttonStyling} >
        <Button title={"Hello"} onPress={this.buttonPressed}/>
        </View>
        
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
  },
  buttonStyling:{
    backgroundColor:"lightgrey",
    paddingVertical:14,
    borderRadius:6,
    borderWidth:1,
    marginVertical:7
  }
  
});