import React from 'react';
import { View, Text } from 'react-native';
import {FontAwesome5} from 'react-native-vector-icons';
import Flag from 'react-native-flags';
const ContactDetails = () => {
    return (
        <View style={{marginHorizontal:12}}>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: '30px',marginVertical:10}}>CONTACT DETAILS</Text>
            </View>
            <View>
                {/* Address */}
                <Text style={{color:'#F15b2F',fontWeight: 'bold',fontSize:20}}>Address</Text>
                <View style={{flexDirection: 'row'}}>
                    <View style={{marginVertical:10}}>
                    <FontAwesome5 name='map-marker-alt' size={24} color="#F15b2F"/>
                    </View>
                    <View>
                        <Text style={{marginLeft:10,marginVertical:10}}>B 44, Bhabha Marg, B Block, Sector 59, Noida,<br/> Uttar Pradesh 201301</Text>
                    </View>
                </View>
                {/* company pan */}
                <View style={{marginVertical:5}}>
                    <Text style={{color:'#F15b2F',fontWeight: 'bold',fontSize:20}}>Company PAN</Text>
                    <Text style={{marginVertical:10, marginLeft:25}}>AAWCS6644M</Text>
                </View>
                {/* company GST */}
                <View style={{marginVertical:5}}>
                 <Text style={{color:'#F15b2F',fontWeight: 'bold',fontSize:20}}>Company GST</Text>
                 <Text style={{marginVertical:10,marginLeft:25}}>ACCOUNT INFORMATION- SNVA VENTURES PRIVATE LIMITED GST- 09AAWCS6644M1Z9</Text>
                </View>
                {/* company CIN */}
                <View style={{marginVertical:5}}>
                    <Text style={{color:'#F15b2F',fontWeight: 'bold',fontSize:20}}>Company CIN</Text>
                    <Text style={{marginVertical:10,marginLeft:25}}>CIN-U74120UP2016PTC076152</Text>
                </View>
                {/* Emails */}
                <View>
                <Text style={{color:'#F15b2F',fontWeight: 'bold',fontSize:20}}>Email ID</Text>
                <View style={{flexDirection: 'row',marginVertical:15,alignItems: 'center'}}>
                    <View>
                        <FontAwesome5 name='envelope'  size={24} color="#F15b2F"/>
                    </View>
                    <View>
                        <Text style={{marginLeft:15}}>support@travomint.com</Text>
                    </View>
                </View>
                </View>

                {/* Us Sales */}

                <View>
                    <View style={{flexDirection: 'row',alignItems: 'center'}}>
                        <View><Flag code="US" size={32} /></View>
                        <View><Text style={{color:'#F15b2F',fontWeight: 'bold',fontSize:20,marginLeft:10}}>US Sales</Text></View>
                    </View>
                    <View  style={{flexDirection: 'row',marginVertical:15,alignItems: 'center'}}>
                        <View>
                        <FontAwesome5 name='phone'  size={18} color="#F15b2F"/>
                        </View>
                        <View>
                            <Text style={{marginLeft:15}}>+1-888-266-1699</Text>
                        </View>
                    </View>
                </View>

                {/* us customer Service */}
                <View>
                    <View style={{flexDirection: 'row',alignItems: 'center'}}>
                    <View><Flag code="US" size={32} /></View>
                        <View><Text style={{color:'#F15b2F',fontWeight: 'bold',fontSize:20,marginLeft:10}}>US customer Service</Text></View>
                    </View>
                    <View  style={{flexDirection: 'row',marginVertical:15,alignItems: 'center'}}>
                        <View>
                        <FontAwesome5 name='phone'  size={18} color="#F15b2F"/>
                        </View>
                        <View>
                            <Text style={{marginLeft:15}}>+1-240-523-4500</Text>
                        </View>
                    </View>
                </View>

                {/* Uk */}

                <View>
                    <View style={{flexDirection: 'row',alignItems: 'center'}}>
                    <View><Flag code="GB" size={32} /></View>
                        <View><Text style={{color:'#F15b2F',fontWeight: 'bold',fontSize:20,marginLeft:10}}>UK</Text></View>
                    </View>
                    <View  style={{flexDirection: 'row',marginVertical:15,alignItems: 'center',}}>
                        <View>
                        <FontAwesome5 name='phone'  size={18} color="#F15b2F"/>
                        </View>
                        <View>
                            <Text style={{marginLeft:15}}>+44-203-769-1864</Text>
                        </View>
                    </View>
                </View>

                {/* Australia */}

                <View>
                    <View style={{flexDirection: 'row',alignItems: 'center'}}>
                    <View><Flag code="AU" size={32} /></View>
                        <View><Text style={{color:'#F15b2F',fontWeight: 'bold',fontSize:20,marginLeft:10}}>Australia</Text></View>
                    </View>
                    <View  style={{flexDirection: 'row',marginVertical:15,alignItems: 'center'}}>
                        <View>
                        <FontAwesome5 name='phone'  size={18} color="#F15b2F"/>
                        </View>
                        <View>
                            <Text style={{marginLeft:15}}>+61-242-048-091</Text>
                        </View>
                    </View>
                </View>

                {/* INDIA */}

                <View>
                    <View style={{flexDirection: 'row',alignItems: 'center'}}>
                    <View><Flag code="IN" size={32} /></View>
                        <View><Text style={{color:'#F15b2F',fontWeight: 'bold',fontSize:20,marginLeft:10}}>India</Text></View>
                    </View>
                    <View  style={{flexDirection: 'row',marginVertical:10}}>
                        <View>
                        <FontAwesome5 name='phone'  size={18} color="#F15b2F"/>
                        </View>
                        <View>
                            <Text style={{marginLeft:15}}>+91-8010000200</Text>
                        </View>
                    </View>
                </View>
                
            </View>
        </View>
    )
}

export default ContactDetails
