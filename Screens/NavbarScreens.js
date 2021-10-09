// import React from 'react'
// import { StyleSheet, Text, View , TouchableOpacity,Image} from 'react-native';
// import {DrawerActions} from '@react-navigation/native';
// import{FontAwesome5} from 'react-native-vector-icons';
// import logo from '../assets/Travomint.png'
// import FlightForm from './FlightForm'







//     const NavbarScreens = ({navigation}) => {
//         return (
//           <View>
//           <View style={styles.container}>
//             {/* header */}
//           <View>
//             <View style={styles.allnavbar}>
//               <View style={{flexDirection: 'row'}}>
//                  <TouchableOpacity>
//                     <FontAwesome5
//                     onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}
//                     name='bars' size={30} color='#000'/>
//                  </TouchableOpacity>
//                  <View style={{marginLeft:10}}>
//                     <Image source={logo} style={{width:150 , height:30}}/>
//                  </View>
//               </View>
//               <View style={{flexDirection: 'row' , marginTop:7 ,alignItems:'center',justifyContent: 'center'}}>
//                 <View style={{flexDirection: 'row', marginRight:10,}}>
//                   <Text style={{border:'1px solid #000',paddingVertical:5,paddingHorizontal:5,borderBottomLeftRadius:50,borderTopLeftRadius:50}}>LO</Text>
//                   <Text style={{border:'1px solid #000',paddingVertical:5,paddingHorizontal:5}}>IND</Text>
//                   <Text style={{border:'1px solid #000',paddingVertical:5,paddingHorizontal:5,borderBottomRightRadius:50,borderTopRightRadius:50}}>En</Text>
//                 </View>
//                 <View>
//                 <FontAwesome5
//                   name='ellipsis-v' 
//                   size={25} 
//                   color='#000'/>
//                  </View>
//               </View>
//             </View>
//           </View>
//           </View>
//           <View><FlightForm/></View> 
//           </View>
//         );
//       }

      
// const styles = StyleSheet.create({
//     container: {
//       minHight:20
//     },
//     allnavbar:{
//       flexDirection: 'row', 
//       justifyContent: 'space-between',
//       marginVertical: 10,
//       marginHorizontal:10,
//     }
//   });


// export default NavbarScreens;

import React from 'react';
import { View,Text,StyleSheet,ScrollView ,Dimensions} from 'react-native'
import BestOffer from './BestOffer';
import FlightForm from './FlightForm';
import UpperTabs from './UpperTabs';
import OfferPromoCode from './OfferPromoCode';
import DealsArea from './DealsArea';
import PopularDeals from './PopularDeals';
import WeekendTours from './WeekendTours';
import MembersAccess from './MamberAccess';
import Aboutus from './Aboutus';
import WeekendCards from './WeekendCards';

const NavbarScreens = () => {
  const screenHeight = Dimensions.get('window').height
  return(
    <View  style={[styles.container,{screenHeight}]}>
    <ScrollView> 
      <View><UpperTabs/></View>
      <View><FlightForm/></View>
      <View><BestOffer/></View>
      <View><OfferPromoCode/></View>
      <View style={{marginVertical:5}}><PopularDeals/></View>
      <DealsArea/>
      <View><WeekendTours/> </View>
      <View>
        <WeekendCards/>
      </View>
      <View style={{border:"1px solid #ddd",marginHorizontal:12,marginVertical:12}}> 
        <MembersAccess/> 
      </View>
      <View>
        <Aboutus/>
      </View>

  </ScrollView>
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
export default NavbarScreens;