import React,{useState} from 'react'
import { StyleSheet, Text, View,TextInput,Button, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import{FontAwesome5} from 'react-native-vector-icons';
import OfferPromoCode from './OfferPromoCode';
import Carasoul from './Carasoul';
import MembersAccess from './MamberAccess';
import HotelDeals from './HotelDeals';
import BestOffer from './BestOffer';
import Footer from './Footer';
import Aboutus from './Aboutus';

    const HotelsScreens = () => {

      const Separator = () => (
        <View style ={styles.separator}></View>
      )

      const [text, setChangeText] = useState("Distnation");
      const [CheckIn, setCheckIn] = useState('Check IN');
      const [CheckOut, setCheckOut] = useState('Check Out');
      const [Night, setNight] = useState('Nights');
      const [Room, setRoom] = useState('Room / Guest');









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

            {/* Hotels room book  form  */}

          <View style={{marginBottom:30}}>
            <View>
            <Text>DEL</Text>
            <TextInput
        style={styles.input}
        onChangeText={setChangeText}
        value={text}
      />
      <View style={{flexDirection:'row', width: '100%'}}>
      <TextInput
        style={{width:'40%', height: 40, margin: 12, borderWidth: 1,
        padding: 10,}}
        onChangeText={setCheckIn}
        value={CheckIn}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <TextInput
        style={{width:'40%', height: 40, margin: 12, borderWidth: 1,
        padding: 10,}}
        onChangeText={setCheckOut}
        value={CheckOut}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <TextInput
        style={{width:'20%', height: 40, margin: 12, borderWidth: 1,
        padding: 10,}}
        onChangeText={setNight}
        value={Night}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      </View>
      <View>
      <TextInput
        style={styles.input}
        onChangeText={setRoom}
        value={Room}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      </View>
      <View style={{marginHorizontal: 12,borderRadius:'30%'}}>
        <Button style={{borderRadius:'30%'}} color="#F15b2F" title="Search"/>
      </View>
            </View>
          </View>

              <OfferPromoCode/>
              <HotelDeals/>
              <Carasoul/>
              <MembersAccess/>
              <BestOffer/>
              
            <StatusBar style="auto" />
            </View>
            <Aboutus/>
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
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });


export default HotelsScreens;