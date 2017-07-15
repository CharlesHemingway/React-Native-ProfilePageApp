import React from 'react';
import { 
  StyleSheet,  
  View
   } from 'react-native';

import Header from './app/components/Header';

import Bar from './app/components/Bar';

import PhotoGrid from './app/components/PhotoGrid';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

      <Header/>
      <Bar/>
      <PhotoGrid/>

      </View>

      
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#000',
  }

});
