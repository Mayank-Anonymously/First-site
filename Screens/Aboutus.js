import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Footer from './Footer';


const image={uri: 'https://www.travomint.com/resources/images/footer_bg_img.jpg'}

const image1={uri:'https://www.travomint.com/resources/images/logo.svg'}



export default function Aboutus() {
  return (
    <View>
    <View>
    <View style =  {styles.container}>
      <View >
      <ImageBackground
       source={image} 
      style={{width: '100%', height: '100%' , }} >
        
      

        <Image
       source={image1} 
       style={{resizeMode:"contain",
       width:150,
       height:40,
       marginTop:20,
       marginLeft:10
       }}
      />


     <Text style ={[styles.Text,{opacity:0.8, marginTop:10, marginLeft:10,  marginRight:10, marginBottom:10 , lineHeight:25 }]}> 
      Travomint.com is an independent travel portal with no third party association. 
      By using travomint.com, you agree that travomint is not accountable for any loss - direct or indirect, arising of offers, materials or links to other sites found on this website. 
      In case of queries, reach us directly at our Toll Free Number-
      </Text>
    
      <Text style ={{ marginLeft:10, fontSize:25  , color:"#f15b2F" , fontWeight:"bold"}}>
        Who Are We
      </Text>
      <View style = {{marginLeft:10}}>
      <View style={{
                        width: '110px',
                        height: '4px',
                        backgroundColor: '#f15b2f',
                        marginTop: 10,
                        display: 'block',
                    }}>
                      
                    </View>
                     <View style={{
                        width: '90px',
                        height: '4px',
                        backgroundColor: '#f15b2F',
                        marginTop: 8,
                        display: 'block',
                    }}></View>
      </View>
      <View >
        <ul  style={{color:"#666" , fontSize:15 , fontFamily:"Arial" , fontWeight:"bold"}}>
          
          <li>Frequently Asked Questions</li> 
          .................................
          <li>Terms And Condition</li>
          .................................
          <li>Privacy Policy</li>
          .................................
          <li>About Us</li>
          .................................
        </ul>
      </View>

      </ImageBackground>

     </View>

    </View> 
    </View>
    <Footer />
    </View>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1

  },
  Text:{
    color:"White",
    fontSize:15,
    fontStyle:"arial",
    color: "Black",
    // backgroundColor: 'tan'
  },
  // image:{  
  //     overflow: 'hidden',
  //     shadowColor: 'grey',
  //     shadowRadius: 10,
  //     shadowOpacity:12,
  //   },
});

