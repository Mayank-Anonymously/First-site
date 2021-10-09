import React from  'react';
import { Text , View , Image } from 'react-native';
import TransferMainSec from '../Transfer/TransferMainSec';


const image1={uri:'https://www.travomint.com/resources/images/logo.svg'}

const footerImage={uri:'https://www.travomint.com/resources/images/cardIn-logos.png'}
const footerImage1={uri: 'https://www.travomint.com/resources/images/godaddy.gif'}






const Footer = () => {
    return (
        <View>
              <View style ={{backgroundColor:"#2f4f4f", justifyContent:"center" ,  alignItems:"center" }}>

                <View style = {{backgroundColor:"#2f4f4f"}}>
                        <Text style={{color:"whitesmoke", fontFamily:"robotic",marginLeft:20, marginTop:10 }}>
                         (DBA of SNVA TravelTech Pvt Ltd)
                        </Text>
                </View>




                <View>
                    <Text style = {{ color:"white",  backgroundColor:"#2f4f4f" , fontFamily:"arial" ,mariginTop:10 , fontSize:15}} >
                              <Image 
                                  source = {image1}
                                  style={{ resizeMode:"contain", width:50, height:10, mariginTop:10}}
                                  />
                             Copyright © 2021. All rights reseved.
                         </Text>
                    <Text style = {{backgroundColor:"#2f4f4f"}} >
                          <Image
                               source ={footerImage}
                               style={{  resizeMode:"center", width:100, height:40 , marginLeft:30, marginTop:10}}
                           />
                         <Image 
                              source ={footerImage1}
                              style={{ resize:"contain" , width:100, height:40, marginLeft:8, marginTop:10}}
                          />
                    </Text>
               </View>
               <Text style = {{color : "whitesmoke",textAlign: "center"}}>We assure safe and secure transactions through powerful Godaddy Secure Seal</Text>
            </View>

            <TransferMainSec />
        </View>
    )
}

export default Footer;