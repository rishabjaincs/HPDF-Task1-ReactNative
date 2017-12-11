/*
 Rishab Jain
*/

import React,{Component} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  
  ScrollView,
  Platform,
  StyleSheet,
  Text,
  Image,
  View,TouchableOpacity, TouchableHighlight
} from 'react-native';
import { Container, Header, Left, Body, Right, Title,Button,Icon,Thumbnail } from 'native-base';
import SearchBar from 'react-native-searchbar';

import {TabNavigator,DrawerNavigator} from 'react-navigation';
import first from './screen/first';
import second from './screen/second';
import third from './screen/third';
import four from './screen/four';
import five from './screen/five';
import six from './screen/six';
import tab1 from './screen/tab1';
import tab2 from './screen/tab2';
import tab3 from './screen/tab3';
import tab4 from './screen/tab4';
const MainScreenNavigator= TabNavigator({
    tab1:{screen:tab1,
    icon: ({tintColor})=> {
      return (

        <MaterialIcons
        name="camera-enhance"
        size={24}
        style={{color: white}}
        >
        </MaterialIcons>
        );
    }
    },
    tab2:{screen:tab2},
    tab3:{screen:tab3},
    tab4:{screen:tab4}

  },{
    tabBarPosition:'top',
    swipeEnabled:true,
    tabBarOptions:{
      activeTintColor:'white',
      activeBackgroundColor:'gray',
      inactiveTintColor:'blue',
      inactiveBackgroundColor:'green',
      labelStyle:{
        fontSize:16,
        padding:0}

      }
    }
  );
  MainScreenNavigator.navigationOptions={
    title: "Moments",
    tabBarLabel: 'Screen 1',
    drawerIcon: ({tintColor})=> {
      return (

        <MaterialIcons
        name="camera-enhance"
        size={24}
        style={{color: tintColor}}
        >
        </MaterialIcons>
        );
    }
  };

class MyHomeScreen extends Component {
  render(){
    return(
      <View style={{ flex: 1}}>
      <Container>
        <Header style={{backgroundColor:'white'}}>
          <Left>
            
            <Thumbnail 
            style={{width:35,height: 35}}
            source={{uri: 'https://qph.ec.quoracdn.net/main-thumb-106720517-200-kenemtfjcvnmelsgvldvxfywrheijala.jpeg'}} />
          </Left>
          <Body>
            <Title style={{color:'black'}}>Home</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' style={{color:'black'}} />
            </Button>
          </Right>
        </Header>
      </Container>
<View style={{ flex: 2, marginTop: 5}}>
    
    <SearchBar
    ref={(ref) => this.searchBar = ref}
          showOnLoad
          placeholder='Search Twitter'/>
</View>
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
    Home Page
    </Text>
    
    </View>
    <TouchableHighlight onPress={() => this.searchBar.show()} 
          underlayColor='white'>
        <Image 
style={{width: 60, height: 60, marginLeft:330, marginBottom: 30, alignItems: 'center'}}
source={{uri:'https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png'}} />
    </TouchableHighlight>
    </View>
    
      );
  }
  static navigationOptions = {
    drawerLabel: 'Rishab Jain',
    drawerIcon: ()=> (
      <Image 
style={{flex: 1,width: 50, height: 50, borderRadius: 100, marginTop:30, marginBottom: 30,alignItems: 'center'}}
source={{uri:'https://qph.ec.quoracdn.net/main-thumb-106720517-200-kenemtfjcvnmelsgvldvxfywrheijala.jpeg'}}/>
    ),
  };

 
}

const DrawerExample = DrawerNavigator(
  
{
  Home: {
    screen: MyHomeScreen,
  },
  Profile: {
    path: '/',
    screen: first,
  },
  Lists: {
    path: '/sent',
    screen: second,
  },
  
  Moments: {
    path: '/',
    screen: MainScreenNavigator,
  },
  
  Highlights: {
    path: '/',
    screen: four,
  },
  
  Settings : {
    path: '/',
    screen: five,
  },
  
  Help : {
    path: '/',
    screen: six,
  },
},
{
    
    drawerPosition: 'left',
    initialRouteName: 'Home'

}

  );


export default DrawerExample;

