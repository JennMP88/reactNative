import React, {Component} from 'react';
import {  
  Platform,    //allows you to render diff info according to platform  
  StyleSheet,  //css of react native
  Text,        //renders text to display on app
  View,        //box where all other components are in
  Image } from 'react-native';

  // const instructions=Platform.select({
  //   ios:'Press Cmd +R to reload, \n'+
  //   'Cmd+D or shake for a dev menu',
  //   android:'Double tap R on your keyboard to reload \n' +
  //   'shake or press menu button for dev menu',
  // });

export default class App extends Component {
  constructor(){
    super()
    this.state={}
    this.state.customStyles={
      color:'red'
    }

    setInterval(()=>{
      if(this.state.customStyles.color=='red'){
        this.setState({
          customStyles:{
            color:'green'      //every sec i'm changing something
          }  
        })
      }
      else{
        this.setState({
          customStyles:{
            color:'red'
          }
        })
      }
   
    },1000)
  }
  

  render(){

    return (
      <View style={styles.container}>
      <Text style={[styles.welcome,this.state.customStyles]}>
        hello world! whaat
      </Text>
      {/* <Image source={{uri:"https://vignette.wikia.nocookie.net/fantheories/images/a/a0/Johnny_Bravo_Render.png/revision/latest?cb=20190821220352" }}/> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome:{
    fontSize:20,
    textAlign:'center',
    margin:10,
    color:'blue'
  },

  instructions:{
   textAlign:'center',
   color:'#333333',
   marginBottom:5,
  }
});
