import React from 'react';
import { View, Text } from 'react-native';
import {FontAwesome5} from 'react-native-vector-icons'

export default function WeekendTours() {
    return (
        <View>
            <View style={{marginBottom:30}}>
                <View  style={{marginVertical:10}}>
                    <Text style={{fontSize:20,fontWeight: 'bold', marginLeft:25}}>WEEKEND TOURS</Text>
                </View>
                <View style={{flexDirection:"row"}}> 
                    <View style={{marginLeft:25}}>
                        <FontAwesome5 name="plane-departure" size={35} color="#F15b2F"/>
                    </View>
                    <View style={{marginLeft:10}}>
                    <View style={{
                        width: '102px',
                        height: '2px',
                        backgroundColor: '#c0c0c0',
                        margin: '5px',
                        display: 'block',
                    }}></View>
                    <View style={{
                        width: '160px',
                        height: '2px',
                        backgroundColor: '#c0c0c0',
                        margin: '5px',
                        display: 'block',
                    }}></View>
                    <View style={{
                        width: '132px',
                        height: '3px',
                        backgroundColor: '#c0c0c0',
                        margin: '5px',
                        display: 'block',
                    }}></View>
                    </View>
                </View>
            </View>
        </View>
    )
}