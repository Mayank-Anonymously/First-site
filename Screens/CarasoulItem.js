import React from 'react';
import {View, StyleSheet,Text,Image,useWindowDimensions} from 'react-native';

const carasoulItem = ({item}) => {
    const {width} = useWindowDimensions();  
    return (
        <View style={[{width},{marginTop:30}]}>
            {/* <Text>Screen</Text> */}
            <Image source={item.image} style={[styles.image,{width,resizeMode:'cover'}]}/>
            <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.discription}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
    },
    title:{ 
        fontWeight:500,
        fontSize:20,
        marginBottom:10,
        color:'#493d8a',
        paddingHorizontal:14,
        // textAlign: 'center'
    },
    description:{
        fontWeight:500,
        marginBottom:10,
        color:'#000',
       paddingHorizontal:14,
    }
})

export default carasoulItem;
