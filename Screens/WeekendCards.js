import React from 'react';
import {View,Text, StyleSheet,Image} from 'react-native';
import singapur from '../assets/singapore_ft.jpg'

const WeekendCards = () => {
    return (
        <View style={styles.container}>
            <View style={{marginHorizontal:18,height:380,backgroundColor:'#ccc'}}>
                <View>
                    <Image source={singapur} style={{height:250,margin:10}}/>
                </View>
                <View style={{marginHorizontal:12,flexDirection:'row'}}>
                    <View>
                    <Text style={{fontSize:20}}>Weekend Gateways</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',width:"100vw"}}>
                        <View>
                         <Text style={{marginVertical:8}}>Use Coupon Code</Text>
                         </View>
                         <View style={{backgroundColor:"#F15b2F",flexDirection:'row-reverse',borderTopLeftRadius:30 ,marginRight:60,alignItems: 'center'}}>
                        <Text style={{color:'#fff',padding: 10,wordSpacing:5}}>GET 15 OFF*</Text>
                        </View>
                        {/* <View style={{float: 'right',}}></View> */}
                    </View>
                    <Text style={{color:'blue',fontSize:15}}>TRAVOMINT</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default WeekendCards;
