import React,{useState} from 'react'
import { View, Text, StyleSheet, TextInput,Button,ScrollView,TouchableOpacity } from 'react-native'

const OfferPromoCode = () => {
    const [offer, setOffer] = useState('Get Travomint Emails!')
    return (
        <ScrollView>
          <View  style={styles.shadow}>

            <View style={{justifyContent: 'center',alignItems: 'center', marginVertical:8}}>
                <Text style={{ color: '#000' , fontSize:20  , fontWeight: 'bold' }}>Sign Up and Save Up to <Text style={{color:"#F15b2F"}}>40%</Text> off</Text>
            </View>
            <View>
                <View style={styles.secondshadow}>
                <View  style={{marginVertical:20}}>
                    <Text style={{marginLeft:12,fontWeight:'bold', fontSize:20}}>Avail the offer with your promo code!</Text>
                    <View style={{flexDirection:'row'}}>
                    <TextInput
                    style={styles.input}
                      onChangeText={setOffer}
                      value={offer}
                      placeholder="Get Travomint Emails!"
                    />
                   
                    <TouchableOpacity style={styles.whiteButton}>
                      <Text style={{textAlign:"center", padding:20,fontSize:20, color:"#fff",}}>Promo Code</Text>
                    </TouchableOpacity>
                    {/* <Button style={{}} color="#F15b2F" title="Get Promo Code"/> */}
                    </View>
                    <View>
                        <Text style={{marginLeft:12}}>T&C Applicable.</Text>
                    </View>
                </View>
                </View>
            </View>

          </View>
          </ScrollView>
    )
}

const styles = StyleSheet.create({
    shadow:{
        shadowinset:{
            width:1,
            height:6,
        },
        shadowColor:"#222",
        shadowOpacity:.5,
        shadowRadius:8,
        height:250,
        // backgroundColor: '#000',
        marginHorizontal:12,
        marginBottom:20
        },
        secondshadow:{
            shadowinset:{
                width:1,
                height:6,
            },
            shadowColor:"#222",
            shadowOpacity:.8,
            shadowRadius:10,
            marginHorizontal:10,
            marginVertical:10,
        },
        input: {
            width:'50%',
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderBottomLeftRadius:"30px",
            borderTopLeftRadius:"30px"
          },
          whiteButton : {
            borderWidth:1,
            overflow : "hidden",
            marginTop: 12,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            backgroundColor:"#F15b2F",
            height:"50%",
            borderBottomRightRadius:'30px',
            borderTopRightRadius:'30px',
            borderColor:"white",
        }
})
export default OfferPromoCode

