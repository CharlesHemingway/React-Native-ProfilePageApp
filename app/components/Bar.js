import React from 'react';
import { 
  StyleSheet,  
  View,
  Text
   } from 'react-native';


export default class Bar extends React.Component {
  render() {
    return (
      
      <View style={styles.bar}>

        <View style={[styles.barItem, styles.barseparator]}>
          <Text style={styles.barTop}>12M</Text>
          <Text style={styles.barBottom}>followers</Text>
        </View>

        <View style={styles.barItem}>
          <Text style={styles.barTop}>332</Text>
          <Text style={styles.barBottom}>following</Text>
        </View>


     </View>

      
    );
  }
}



const styles = StyleSheet.create({
  bar:{
    borderTopColor:'#fff',
    borderTopWidth:4,
    backgroundColor:'#527caf',
    flexDirection:'row',
  },
  barseparator:{
    borderRightWidth:4,
  },
  barItem:{
    flex:1,
    padding:18,
    alignItems:'center',
  },
  barTop:{
    color:'#fff',
    fontSize:16,
    fontWeight:'bold',
    fontStyle:'italic',
  },
  barBottom:{
    color:'#000',
    fontSize:14,
    fontWeight:'bold',
  }


});
