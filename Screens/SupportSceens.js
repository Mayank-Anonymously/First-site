import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import HomeScreens from './NavbarScreens';
import ContactDetails from './ContactDetails'
import ContactFormHeader from './ContactFormHeader';
import Footer from './Footer';
import Aboutus from './Aboutus';
0
    const ProfileScreens = () => {
        return (
          <ScrollView>
          <View style={styles.container}>
            {/* <Text>Support</Text> */}
            <ContactFormHeader/>
            <ContactDetails/>
            <Aboutus/>
            {/* <Footer/> */}
            <StatusBar style="auto" />
          </View>
          </ScrollView>
        );
      }

      
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });


export default ProfileScreens;