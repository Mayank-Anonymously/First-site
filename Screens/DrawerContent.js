import React,{useState} from 'react'
import { StyleSheet,View, Image ,Linking} from 'react-native';
import {DrawerContentScrollView,DrawerItem}from '@react-navigation/drawer';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Title,Text,TouchableRipple,Switch,Drawer } from 'react-native-paper';  

// components 
import Bookmark from './BookmarkScreens'
import Explore from './ExploreScreen'

// Image
import Logo from '../assets/Travomint.png'

    const DrawerContent = (props) => {   

        const [isDarkTheme , setIsDarkTheme] = useState(false);

    const toggleTheme = () =>{
        setIsDarkTheme(!isDarkTheme);
    }


        return (
          <View style={{flex:1}}>
              <View  style={{marginTop:30}}>
        <Image source={Logo} style={{width:150 , height:30 , marginLeft:45}}/>
      </View>
      <DrawerContentScrollView  style={{marginTop:30}}  {...props}>
      <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
            style={{cursor: 'pointer'}}
            options={{
                headerShown:false
            }}
            icon={({color,size})=>(
                <Icons
                name="home-outline"
                color={color}
                size={size}
                />
            )}
            label="Home"
            onPress={()=>{props.navigation.navigate('Home')}}
            />

           <DrawerItem
           options={{
            headerShown:false
        }}
            icon={({color,size})=>(
                <Icons
                name="home-search-outline"
                color={color}
                size={size}
                />
            )}
            label="Hotel"
            />

           <DrawerItem
           options={{
            headerShown:false
        }}
            icon={({color,size})=>(
                <Icons
                name="account-circle-outline"
                color={color}
                size={size}
                />
            )}
            label="Profile"
            onPress={()=>{props.navigation.navigate('Bookmark')}}
            />

            <DrawerItem
            options={{
                headerShown:false
            }}
            icon={({color,size})=>(
                <Icons
                name="run-fast"
                color={color}
                size={size}
                />
            )}
            onPress={()=>{props.navigation.navigate('Explore')}}
            label="Service"
            />

           <DrawerItem
           options={{
            headerShown:false
        }}
            icon={({color,size})=>(
                <Icons
                name="account-check-outline"
                color={color}
                size={size}
                />
            )}
            onPress={()=>{props.navigation.navigate('Support')}}
            label="Support"
            />
        </Drawer.Section>

        <Drawer.Section title="Preferences">
                <TouchableRipple onPress={()=> {toggleTheme()}}>
                    <View style={styles.preference}>
                        <Text>
                            Dark Theme
                        </Text>
                        <View pointerEvents="none">
                            <Switch value={isDarkTheme}/>
                        </View>
                    </View>
                </TouchableRipple>
        </Drawer.Section>
      </DrawerContentScrollView>
          </View>
        );
      }

      
const styles = StyleSheet.create({
    draweContent: {
      flex: 1,
    },
    userInfoSection:{
        paddingLeft: 20,
    },
    title:{
        fontSize:16,
        marginTop:3,
        fontWeight:'bold'
    },
    caption:{
        fontSize:14,
        lineHeight:14,
    },
    row:{
        marginTop:40,
        flexDirection:'row',
        alignItems: 'center'
    },
    section:{
        flexDirection:'row',
        alignItems: 'center',
        marginRight:15
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3,
    },
    drawerSection:{
        marginTop:15,
    },
    bottomDrawerSection:{
        marginBottom : 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth:1
    },
    preference:{
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingHorizontal:16,
        paddingVertical:12
    }
  });


export default DrawerContent;