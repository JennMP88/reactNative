import React, { Component } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      list:["banana","manzanas","pears"],
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.list}
          
          renderItem={({item}) => 
          <> 
          <View style={styles.wrapper}>
          <Text style={styles.item}>{item}</Text>
          </View>
          </> 
          }>
          
        </FlatList>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper:{
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    marginBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "blue"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

// import React, {Component} from 'react';
// import { StyleSheet, Text, View, Image } from 'react-native';

// // const instructions=Platform.select({
// //   ios:'press Cmd+R to reload, \n' +
// //     'Cmd+D or shake for dev menu',
// // })

// export default class App extends Component {
//  constructor() {
//    super()
//    this.state={}
//    this.state.customStyles={
//      color:'red',
//      list:["banana","apple","pears"]
//    }

//    setInterval(() => {

//      if(this.state.customStyles.color=='red') {
//        this.setState({
//         customStyles:{
//           color:'green'
//         }
//        })
//       }else {
//         this.setState ({
//           customStyles:{
//             color:'red'
//           }
//         })
//       }
//    }, 1000);
//  }

//   render(){

//     return (
//       <View style={styles.container}>
//       <Text style={[styles.welcome, this.state.customStyles]}>hello world! whaat</Text>
//       {/* <Image source={{uri:"https://vignette.wikia.nocookie.net/fantheories/images/a/a0/Johnny_Bravo_Render.png/revision/latest?cb=20190821220352" }}/> */}

//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   welcome:{
//     fontSize:20,
//     textAlign:'center',
//     margin:10,
//     color:'blue'
//   },

//   instructions:{
//    textAlign:'center',
//    color:'#333333',
//    marginBottom:5,
//   }
// });
