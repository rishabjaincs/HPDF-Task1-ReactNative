/*
 Rishab Jain
*/
import React from 'react';
import {Text,Image,View,TouchableOpacity, TouchableHighlight} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Container, Header, Left, Body, Right, Button, Icon, Title,Thumbnail } from 'native-base';
import { Content, List, ListItem, Switch } from 'native-base';
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

		return <View
      style={
      {
      flex: 1,
      
      }
    }
      >
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
        <Content>
          <List>
            <ListItem icon>
              <Left>
                <Icon name="plane" />
              </Left>
              <Body>
                <Text>Private Mode</Text>
              </Body>
              <Right>
                <Switch value={false} />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="wifi" />
              </Left>
              <Body>
                <Text>Available</Text>
              </Body>
              <Right>
                <Text>Rishab Jain</Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="bluetooth" />
              </Left>
              <Body>
                <Text>Private Tweets</Text>
              </Body>
              <Right>
                <Text>On</Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>

		
		</View>

	}
}
