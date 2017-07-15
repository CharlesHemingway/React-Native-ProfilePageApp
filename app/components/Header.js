import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
   } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
     
     <Image style={styles.headerBackground} source={require('../img/headerbg.jpg')}>

    	<View style={styles.header}>
    		<View style={styles.profilepicWrap}>
    			<Image style={styles.profilepic} source={require('../img/profilepic.jpg')} />
    		</View>

    		<Text style={styles.name}>Jackie Chan</Text>
    		<Text style={styles.pos}>Actor / Martial Artist</Text>

    	</View>

     </Image>
      
    );
  }
}



const styles = StyleSheet.create({
	headerBackground:{
		flex:1,
		width:null,
		alignSelf: 'stretch'
	},
	header:{
		flex:1,
		alignItems:'center',
		justifyContent:'center',
		padding:20,
		backgroundColor:'rgba(0,0,0,0.5)',
	},
	profilepicWrap:{
		width:180,
		height:180,
		borderRadius:100,
		borderColor:'rgba(0,0,0,0.4)',
		borderWidth:16,
	},
	profilepic:{
		flex:1,
		width:null,
		alignSelf:'stretch',
		borderRadius:100,
		borderColor:'#fff',
		borderWidth:4,
	},
	name:{
		marginTop:20,
		fontSize:16,
		color:'#fff',
		fontWeight:'bold',
	},
	pos:{
		fontSize:14,
		color:'#0395c0',
		fontWeight:'300',
		fontStyle:'italic',
	}
 

});
