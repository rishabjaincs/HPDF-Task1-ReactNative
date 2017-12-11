/*
 Rishab Jain
*/
import React from 'react';
import {Text,Button,Image,View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default class tab4 extends React.Component{
  static navigationOptions={
    tabBarLabel: 'Mail',
    tabBarIcon: ({ tintColor }) => 
      <Image
        source={{uri:'https://qph.ec.quoracdn.net/main-thumb-106720517-200-kenemtfjcvnmelsgvldvxfywrheijala.jpeg'}}
        style={{width:20,height:20,tintColor:'white'}}>
        </Image>
     ,
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
    Inbox
    </Text>
        </View>  
    }}