import React from "react";
import { StyleSheet, Text ,  View, Image,ScrollView } from "react-native";
import ContactForm from'./ContactForm'


const Bgimg = {uri:'https://wallpaperaccess.com/full/112098.jpg'}



const ContactFormHeader = () => {
    return(
        <View>
        <View>
            <Image
            source ={Bgimg}
            style={{resizeMode:'cover' , height:200}}
            />
            <View style = {{backgroundColor:"whitesmoke",height:30 }}>
                <Text style = {{fontWeight:"bold"}}>
                    Home    /   Contact Us
                </Text>
            </View>
        </View>
        <View>
        <ContactForm/>
        </View>
      
        </View>
    )
}


export default ContactFormHeader;