import React,{useState,useRef} from 'react'
import { View, Text, Image,StyleSheet,FlatList,Animated} from 'react-native'


const image ={uri :'https://www.travomint.com/resources/images/offer_3.svg'}


export default function BestOffer() {
    return (
        <View>
        <View style={styles.shadow}>
            <View  style={{justifyContent: 'center',alignItems: 'center'}}>
                <Text style={{fontSize:20,fontWeight: 'bold',marginBottom:20}}>Best Offers</Text>
                <View>
                    <View style={styles.SecondShadow}>
                        <Image source={image} style={{width:50, height:50,marginVertical:10}}/>
                        <Text style={{marginVertical:6,fontSize:20,color:'#4c4c4c'}}>Up to 1000 off</Text>
                        <Text style={{marginVertical:6 ,textAlign: 'center',color:'#4c4c4c'}}>Upto 2% Discount For Premium Economy/Business Class Booking only.</Text>
                        <Text style={{marginVertical:6,color:'#848484',fontWeight: 'bold'}}>T&C Applicable</Text>
                        <Text style={{marginVertical:6,fontWeight: 'bold'}}>PROMO CODE <Text style={{color:'tomato',fontSize:20}}>"Travomint"</Text></Text>
                    </View>
                </View>
            </View>
        </View>

        </View>
    )
}
const styles = StyleSheet.create({
    shadow:{
        shadowinset:{
            width:1,
            height:6,
        },
        shadowColor:"#222",
        shadowOpacity:.3,
        shadowRadius:4,
        // height:250,
        // backgroundColor: '#000',
        marginHorizontal:12,
        marginBottom:20,borderRadius:10,
        padding:20
        },
    SecondShadow:{
        border:'1px solid #000',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
