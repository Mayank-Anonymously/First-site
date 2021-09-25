import React from "react";
import { StyleSheet, Text ,  View, Image,ScrollView } from "react-native";
import ContactForm from'./ContactForm'


const Bgimg = {uri:'https://wallpaperaccess.com/full/112098.jpg'}



const ContactFormHeader = () => {
    return(
        <ScrollView>
        <View style = {{flex:1}}>
            <Image
            source ={Bgimg}
            style={{resizeMode:'cover', width:'100%' , height:'30%'}}
            />
            <View style = {{backgroundColor:"whitesmoke" }}>
                <Text style = {{fontWeight:"bold"}}>
                    Home    /   Contact Us
                </Text>
            </View>
      
            <ContactForm/>
        </View>
      
        </ScrollView>
    )
}


export default ContactFormHeader;