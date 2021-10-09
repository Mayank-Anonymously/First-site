import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

// icons
import Icons from 'react-native-vector-icons/Ionicons'
// Components Screens
import HomeScreen from './HomeScreen'
import HotelsScreen from './HotelsScreens'
import ExploreScreens from './ExploreScreen'
import ProfileScreens from './SupportSceens'
import NavScreens from './NavbarScreens';
// import SupportScreens from './SupportScreens'
// import { Drawer } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const HotelsStack = createStackNavigator();


const MainTabScreens = () => (
    <Tab.Navigator
    activeColor="#fff"
     >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen }
      options={{
        headerShown:false,
        tabBarLabel: 'Homes',
        tabBarColor:"#f15b2f",
        tabBarIcon: ({ color }) => (
          <Icons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Hotel"
      component={HotelsStackScreen}
      options={{
        headerShown:false,
        tabBarLabel: 'Hotels',
        tabBarColor:"#f15b2f",
        tabBarIcon: ({ color }) => (
          <Icons name="ios-tablet-portrait" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreStackScreen}
      options={{
        headerShown:false,
        tabBarLabel: 'Explores',
        tabBarColor:"#f15b2f",
        tabBarIcon: ({ color }) => (
          <Icons name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        headerShown:false,
        tabBarLabel: 'Support',
        tabBarColor:"#f15b2f",
        tabBarIcon: ({ color }) => (
          <Icons name="ios-aperture" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreens;


const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator>
        <HomeStack.Screen name='Home' options={{headerShown:false}} component={NavScreens} />
      </HomeStack.Navigator> 
  )
  
  const HotelsStackScreen = ({navigation}) => (
    <HotelsStack.Navigator>
        <HotelsStack.Screen name='Hotels' options={{headerShown:false}}  component={HotelsScreen} />
      </HotelsStack.Navigator> 
  )

  const ExploreStackScreen = ({navigation}) => (
    <HotelsStack.Navigator>
        <HotelsStack.Screen name='Explore' options={{headerShown:false}}  component={ExploreScreens} />
      </HotelsStack.Navigator> 
  )

  const ProfileStackScreen = ({navigation}) => (
    <HotelsStack.Navigator>
        <HotelsStack.Screen name='Profile' options={{headerShown:false}}  component={ProfileScreens} />
      </HotelsStack.Navigator> 
  )