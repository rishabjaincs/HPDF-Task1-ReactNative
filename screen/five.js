/*
 Rishab Jain
*/
import React from 'react';
import {Text,Image,View,TouchableOpacity, TouchableHighlight} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Container, Header, Left, Body, Right, Button, Icon, Title,Thumbnail } from 'native-base';
import SearchBar from 'react-native-searchbar';

export default class first extends React.Component{
	static navigationOptions={
		tabBarLabel: 'Screen 1',
		drawerIcon: ({tintColor})=> {
			return (

				<MaterialIcons
				name="settings"
				size={24}
				style={{color: tintColor}}
				>
				</MaterialIcons>
				);
		}

	}
	
	
	render(){

		return <View>
      <Container>
        <Header style={{backgroundColor:'white'}}>
          <Left>
            
            <Thumbnail 
            style={{width:35,height: 35}}
            source={{uri: 'https://qph.ec.quoracdn.net/main-thumb-106720517-200-kenemtfjcvnmelsgvldvxfywrheijala.jpeg'}} />
          </Left>
          <Body>
            <Title style={{color:'black'}}>Settings</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' style={{color:'black'}} />
            </Button>
          </Right>
        </Header>
      </Container>

		<View style={
			{
			flex: 3,
			marginTop: 300,
			justifyContent: 'center',
			alignItems: 'center'
			}
		}>

		<Image 
style={{width: 120, height: 120, marginTop:30, marginBottom:30, alignItems: 'center'}}
source={{uri:'https://abs.twimg.com/icons/apple-touch-icon-192x192.png'}}/>
		<Text style={{fontSize: 30, color: '#55ACEE', textAlign: 'center'}}>
		Settings and Privacy
		</Text>
		</View>
		</View>

	}
}
