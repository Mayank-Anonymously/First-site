
import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import{FontAwesome5} from 'react-native-vector-icons';

// Components Screens
// import HomeScreen from './Screens/HomeScreens'
import HotelsScreen from './Screens/HotelsScreens'
import MainTabScreens from './Screens/MainTabSceens'
import DrawerContent from './Screens/DrawerContent'
import HomeScreens from './Screens/NavbarScreens';
import HomeScreen from './Screens/HomeScreen';
import NavbarScreens from './Screens/NavbarScreens';
// import { Drawer } from 'react-native-paper';

// image
import Logo from './assets/Travomint.png'


const HomeStack = createStackNavigator();
const HotelsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function LogoTitle() {
  return (
    <Image source={Logo} style={{width:150 , height:30, }}/>
  );
}


export default function App(props) {




  return(

  <NavigationContainer>
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
      <Drawer.Screen name='Home'
       options={{
        headerTitle: (props) => <LogoTitle {...props} />,
        headerRight: () => (
          <View style={{flexDirection: 'row' , marginTop:7 ,alignItems:'center',justifyContent: 'center', marginRight:10}}>
                <View style={{flexDirection: 'row', marginRight:10,}}>
                  <Text style={{border:'1px solid #000',paddingVertical:5,paddingHorizontal:5,borderBottomLeftRadius:50,borderTopLeftRadius:50}}>LO</Text>
                  <Text style={{border:'1px solid #000',paddingVertical:5,paddingHorizontal:5}}>IND</Text>
                  <Text style={{border:'1px solid #000',paddingVertical:5,paddingHorizontal:5,borderBottomRightRadius:50,borderTopRightRadius:50}}>En</Text>
                </View>
                <View>
                <FontAwesome5
                  name='ellipsis-v' 
                  size={25} 
                  color='#000'/>
                 </View>
              </View>
        )
         }} component={MainTabScreens} />
      {/* <Drawer.Screen name='Hotels' component={Allstack} /> */}
    </Drawer.Navigator>

  </NavigationContainer>

  )}

