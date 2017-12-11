/*
 Rishab Jain
*/
import React from 'react';
import {Image,View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Text,Container, Header, Left, Body, Right, Button, Icon, Title,Thumbnail,Content, Card, CardItem} from 'native-base';
import SearchBar from 'react-native-searchbar';

export default class first extends React.Component{
	static navigationOptions={
		tabBarLabel: 'Screen 1',
		drawerIcon: ({tintColor})=> {
			return (

				<MaterialIcons
				name="list"
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
      flex: 1
      }
    }>
      <Container>
        <Header style={{backgroundColor:'white'}}>
          <Left>
            
            <Thumbnail 
            style={{width:35,height: 35}}
            source={{uri: 'https://qph.ec.quoracdn.net/main-thumb-106720517-200-kenemtfjcvnmelsgvldvxfywrheijala.jpeg'}} />
          </Left>
          <Body>
            <Title style={{color:'black'}}>List</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' style={{color:'black'}} />
            </Button>
          </Right>
        </Header>
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
                  <Text>512 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>9 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>5m ago</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://www.ovationfertility.com/wp-content/uploads/2015/10/Portrait-Of-A-Serious-Woman-looking-at-the-camera-000038093286_crop.jpg'}} />
                <Body>
                  <Text>Alicia Keys</Text>
                  <Text note>@keys.alicia</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'http://hddesktopwallpapers.in/wp-content/uploads/2015/08/landscape-italy-hd.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>112 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>2h ago</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://img2.timeinc.net/people/i/2009/features/tvblog/090601/kris_allen240.jpg'}} />
                <Body>
                  <Text>James Adam</Text>
                  <Text note>@adam.thelastman</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://www.designboom.com/shop/wp-content/uploads/2016/03/danzo-Landscape-Organizing-Boxes-designboom-shop-01-1000x667.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>21 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>6 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>2d ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
		</View>

	}
}
