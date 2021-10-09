import React from 'react';
import {View, StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import {FontAwesome5} from 'react-native-vector-icons';
import GO from '../assets/2T.png'


const DealsArea = () => {
    const Separator = () => (
        <View style ={styles.separator}></View>
      )
    return (
        <View style={styles.container}>
            <View>

                {/* DEL IXC */}
                <View style={styles.card}>
                    <View style={styles.card_header}>
                        <View>
                            <FontAwesome5 style={{marginLeft:10,alignItems: 'center'}} name="plane" size={10} color="#000"/>
                        </View>
                        <View>
                            <Text style={{marginLeft:5}}>Departure</Text>
                        </View>
                        <View>
                            <Text style={{marginLeft:5,fontWeight: 'bold'}}>Tue, 02-Dec-2021</Text>
                        </View>
                    </View>
                    <Separator/>

                    <View>
                        <View style={{flexDirection: 'row',alignItems: 'center'}}>
                            <View>
                                <Image source={GO} style={{width:80, height:80,marginHorizontal:12}}/>
                            </View>
                            <View>
                                <FontAwesome5 name='long-arrow-alt-down' size={20} color='#000'/>
                            </View>
                            <View style={{marginLeft:12}}>
                                <View style={{flexDirection: 'row', marginBottom:8}}>
                                    <Text style={{fontSize:20,color:'#F15b2F'}}>DEL</Text>
                                    <Text style={{marginLeft:12,fontSize:10}}>New Delhi</Text>
                                </View>
                                <View style={{flexDirection: 'row',marginTop:8}}>
                                    <Text style={{fontSize:20,color:'#F15b2F',fontWeight:'bold'}}>IXC</Text>
                                    <Text style={{marginLeft:12,fontSize:10}}>Chandigarh</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <View style={{flexDirection: 'row',justifyContent: 'flex-end',alignItems: 'center',marginHorizontal:12}}>
                            <Text style={{fontSize:10,color:'#000'}}>from</Text>
                            <Text style={{fontSize:20,color:'#F15b2F',marginHorizontal:10}}>1283.00INR</Text>   
                            <TouchableOpacity>
                            <FontAwesome5 name='arrow-circle-right' size={30} color='#F15b2F'/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </View>

            {/* AMD IDR */}

            <View style={styles.card}>
                    <View style={styles.card_header}>
                        <View>
                            <FontAwesome5 style={{marginLeft:10,alignItems: 'center'}} name="plane" size={10} color="#000"/>
                        </View>
                        <View>
                            <Text style={{marginLeft:5}}>Departure</Text>
                        </View>
                        <View>
                            <Text style={{marginLeft:5,fontWeight: 'bold'}}>Tue, 02-Dec-2021</Text>
                        </View>
                    </View>
                    <Separator/>

                    <View>
                        <View style={{flexDirection: 'row',alignItems: 'center'}}>
                            <View>
                                <Image source={GO} style={{width:80, height:80,marginHorizontal:12}}/>
                            </View>
                            <View>
                                <FontAwesome5 name='long-arrow-alt-down' size={20} color='#000'/>
                            </View>
                            <View style={{marginLeft:12}}>
                                <View style={{flexDirection: 'row', marginBottom:8}}>
                                    <Text style={{fontSize:20,color:'#F15b2F'}}>AMD</Text>
                                    <Text style={{marginLeft:12,fontSize:10}}>Ahmedabad</Text>
                                </View>
                                <View style={{flexDirection: 'row',marginTop:8}}>
                                    <Text style={{fontSize:20,color:'#F15b2F',fontWeight:'bold'}}>IDR</Text>
                                    <Text style={{marginLeft:12,fontSize:10}}>Indore</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <View style={{flexDirection: 'row',justifyContent: 'flex-end',alignItems: 'center',marginHorizontal:12}}>
                            <Text style={{fontSize:10,color:'#000'}}>from</Text>
                            <Text style={{fontSize:20,color:'#F15b2F',marginHorizontal:10}}>1283.00INR</Text>   
                            <TouchableOpacity>
                            <FontAwesome5 name='arrow-circle-right' size={30} color='#F15b2F'/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </View>

                {/* BOM MAA */}

                <View style={styles.card}>
                    <View style={styles.card_header}>
                        <View>
                            <FontAwesome5 style={{marginLeft:10,alignItems: 'center'}} name="plane" size={10} color="#000"/>
                        </View>
                        <View>
                            <Text style={{marginLeft:5}}>Departure</Text>
                        </View>
                        <View>
                            <Text style={{marginLeft:5,fontWeight: 'bold'}}>Tue, 02-Dec-2021</Text>
                        </View>
                    </View>
                    <Separator/>

                    <View>
                        <View style={{flexDirection: 'row',alignItems: 'center'}}>
                            <View>
                                <Image source={GO} style={{width:80, height:80,marginHorizontal:12}}/>
                            </View>
                            <View>
                                <FontAwesome5 name='long-arrow-alt-down' size={20} color='#000'/>
                            </View>
                            <View style={{marginLeft:12}}>
                                <View style={{flexDirection: 'row', marginBottom:8}}>
                                    <Text style={{fontSize:20,color:'#F15b2F'}}>BOM</Text>
                                    <Text style={{marginLeft:12,fontSize:10}}>Mumbai</Text>
                                </View>
                                <View style={{flexDirection: 'row',marginTop:8}}>
                                    <Text style={{fontSize:20,color:'#F15b2F',fontWeight:'bold'}}>MAA</Text>
                                    <Text style={{marginLeft:12,fontSize:10}}>Chennai</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <View style={{flexDirection: 'row',justifyContent: 'flex-end',alignItems: 'center',marginHorizontal:12}}>
                            <Text style={{fontSize:10,color:'#000'}}>from</Text>
                            <Text style={{fontSize:20,color:'#F15b2F',marginHorizontal:10}}>1283.00INR</Text>   
                            <TouchableOpacity>
                            <FontAwesome5 name='arrow-circle-right' size={30} color='#F15b2F'/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    backgroundColor: '#fff'
    },
    card:{
        height:180,
        backgroundColor: '#eee',
        marginHorizontal:12,
        marginVertical:10
    },
    separator: {
        marginVertical: 10,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      card_header:{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop:10
      }
})

export default DealsArea;
