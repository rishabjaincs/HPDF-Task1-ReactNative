/*
 Rishab Jain
*/
import React from 'react';
import {Text,Button,Image,View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class four extends React.Component{
	static navigationOptions={
		tabBarLabel: 'Screen 1',
		drawerIcon: ({tintColor})=> {
			return (

				<MaterialIcons
				name="card-membership"
				size={24}
				style={{color: tintColor}}
				>
				</MaterialIcons>
				);
		}
	}
	render(){
		return <View style={
			{
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center'
			}
		}>
		<Image 
style={{width: 120, height: 120, marginTop:30, marginBottom:30, alignItems: 'center'}}
source={{uri:'https://abs.twimg.com/icons/apple-touch-icon-192x192.png'}}/>
		<Text style={{fontSize: 30, color: '#55ACEE'}}>
		Moments
		</Text>
		
		</View>
	}
}