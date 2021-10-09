import React,{useState} from 'react';
import {StyleSheet, Text, View,TextInput,Button, ScrollView} from 'react-native';
import{FontAwesome5} from 'react-native-vector-icons';
import { StatusBar } from 'expo-status-bar';

const UpperTabs = () => {

    const Separator = () => (
        <View style ={styles.separator}></View>
      )
    return (
        <ScrollView>
          <View style={styles.container}>
            <View style={{marginHorizontal:12}}>
            <View>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <View style={{flexDirection: 'column',paddingHorizontal:40}}>
                  <View style={{justifyContent: 'center',alignItems: 'center',paddingVertical:10}}>
                  <FontAwesome5 name="plane" size={24} color="#F15b2F"/></View>
                  <Text style={{fontSize:15 ,fontWeight: 'bold'}}> Flight</Text>
                </View>
                <View style={{flexDirection: 'column',paddingHorizontal:40, }}>
                  <View style={{justifyContent: 'center',alignItems: 'center',paddingVertical:10}}>
                  <FontAwesome5 name="hotel" size={24} color="#F15b2F"/></View>
                  <Text style={{fontSize:15 ,fontWeight: 'bold'}}> Hotel</Text>
                </View>
                <View style={{flexDirection: 'column',paddingHorizontal:40}}>
                  <View style={{justifyContent: 'center',alignItems: 'center',paddingVertical:10}}>
                  <FontAwesome5 name="exchange-alt" size={24} color="#F15b2F"/></View>
                  <Text style={{fontSize:15 ,fontWeight: 'bold'}}> Transfer</Text>
                </View>
              </View>
            </View>
            <Separator/>
              
            <StatusBar style="auto" />
            </View>
            {/* <Aboutus/> */}
          </View>
          </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
      },
      separator: {
        marginVertical: 20,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
})

export default UpperTabs;
