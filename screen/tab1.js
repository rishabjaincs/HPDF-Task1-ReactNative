/*
 Rishab Jain
*/
import React from 'react';
import {Button,Image,View} from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default class tab1 extends React.Component{
  static navigationOptions={
    tabBarLabel: 'Friends',
    tabBarIcon: ({ tintColor }) => (
      <MaterialIcons
        name="settings"
        size={ 30 } 
        style={{ color: 'white' }}/>
    ),        
     
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
        
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{uri: 'https://qph.ec.quoracdn.net/main-thumb-106720517-200-kenemtfjcvnmelsgvldvxfywrheijala.jpeg'}} />
              </Left>
              <Body>
                <Text>Rishab Jain</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{uri: 'http://img2.timeinc.net/people/i/2009/features/tvblog/090601/kris_allen240.jpg'}} />
              </Left>
              <Body>
                <Text>James Adam</Text>
                <Text note>Work hard is the only way to get the success out of anything.</Text>
              </Body>
              <Right>
                <Text note>1:12 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{uri: 'http://www.ovationfertility.com/wp-content/uploads/2015/10/Portrait-Of-A-Serious-Woman-looking-at-the-camera-000038093286_crop.jpg'}} />
              </Left>
              <Body>
                <Text>Alicia Keys</Text>
                <Text note>Hey need some help is anyone out there is Carolina.</Text>
              </Body>
              <Right>
                <Text note>11:13 am</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
      </View>
    }}