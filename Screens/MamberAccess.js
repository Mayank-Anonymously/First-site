import React from 'react';
import {  StyleSheet , View ,Text, Button ,TextInput,} from 'react-native';
import { Paragraph } from 'react-native-paper';




const  MembersAccess = () =>{
    return (
        <View>
            <View style = {{margin:10, padding :10}}>
            <View style = {[styles.shadow,{flex:3, margin:10 , padding:10 , justifyContent:"center"}]}>
                <Text style={{fontWeight:'bold', fontSize:20}}>
                    Members access great rates and savings
                </Text>
                <Paragraph>
                    sign up for free access to personalized
                    recommendation and Private deals.
                </Paragraph>
                <View style={{  flex:3, flexDirection:'row' }}>
                <TextInput
                style={styles.input}
                placeholder="Enter your Email"
                placeholderTextColor="grey"            
                 />
                          
                  <Button title ="Let's Do this" color="#F15b2F" />
                  </View>
                </View>
            </View>
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        flex: 1,
    },
    input: {
        height: 40,
        width:150,
        marginRight:10,
        backgroundColor:"whitesmoke"
      },
    //   shadow: {  
    //     overflow: 'hidden',
    //     shadowColor: 'grey',
    //     shadowRadius: 4,
    //     shadowOpacity:4,
    //   },
})




export default MembersAccess;
