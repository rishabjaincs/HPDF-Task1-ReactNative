/*
 Rishab Jain
*/
import React from 'react';
import {Text,Button,Image,View,TouchableOpacity, TouchableHighlight} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SearchBar from 'react-native-searchbar';
export default class tab3 extends React.Component{
  static navigationOptions={
    tabBarLabel: 'Search',
    tabBarIcon: ({ tintColor }) => 
      <Image
        source={{uri:'https://qph.ec.quoracdn.net/main-thumb-106720517-200-kenemtfjcvnmelsgvldvxfywrheijala.jpeg'}}
        style={{width:20,height:20,tintColor:'white'}}>
        </Image>
     ,
    }
    render(){
      return <View style={{ flex: 1, marginTop: 0 }}>
    
    <SearchBar
    ref={(ref) => this.searchBar = ref}
          showOnLoad
          placeholder='Search Twitter'/>

    <View style={
      {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center'
      }
    }>

    <Image 
style={{width: 120, height: 120, marginTop:30, marginBottom:30, alignItems: 'center'}}
source={{uri:'https://abs.twimg.com/icons/apple-touch-icon-192x192.png'}}/>
    <Text style={{fontSize: 30, color: '#55ACEE', textAlign: 'center'}}>
    Local Search
    </Text>
    
    </View>
    <TouchableHighlight onPress={() => this.searchBar.show()} 
          underlayColor='white'>
        <Image 
style={{width: 60, height: 60, marginLeft:330, marginBottom: 30, alignItems: 'center'}}
source={{uri:'https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png'}} />
    </TouchableHighlight>
    
        
        </View>
    }}