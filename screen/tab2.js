/*
 Rishab Jain
*/
import React from 'react';
import {Image,View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body,Right } from 'native-base';
export default class tab2 extends React.Component{
  static navigationOptions={
    tabBarLabel: 'Tweets',
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
      flex: 1
      }
    }>
      <Container>
        
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://qph.ec.quoracdn.net/main-thumb-106720517-200-kenemtfjcvnmelsgvldvxfywrheijala.jpeg'}} />
                <Body>
                  <Text>Rishab Jain</Text>
                  <Text note>@rishabjain.cs</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F28091428%2F197934029861%2F1%2Foriginal.jpg?w=1000&rect=10%2C0%2C400%2C200&s=97b71553d23ea591fd2ef9c24a1d80cc'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
      
        </View>  
    }}