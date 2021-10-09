import React,{useState} from 'react';
import { View, Text , Image, ImageBackground, Switch , TextInput , StyleSheet , Button } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import TransferIconSec from './TansferIconSection';





const bgimg= {uri:'https://p0.pikist.com/photos/478/426/singapore-city-architecture-building-the-skyscraper-municipal-asia-gorgeous-travel.jpg'}

const TransferMainSec = () =>{
   
    const [isEnabled, setIsEnabled] = useState("No");
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);





    return(
        <View>
            
            <View>
            <ImageBackground
                source = {bgimg} 
                style = {{ resizeMode:"cover"  , height:500}}>

                    
                    <View style ={{ marginTop:20, marginLeft:20,marginRight:20,justifyContent:"space-around" , flexDirection:"row", backgroundColor: "#000000c0"}} >
                        <View>
                        <Button
                        onPress={() => alert ('This is a button!')}
                        color="#"
                        title = "Point-to-Point"
                        leftIcon={
                            <FontAwesome5 
                            name= "map-pin"
                            size={20}
                            color="#000000c0"
                            />
                        }
                        />
                        </View>

                        <View>
                        <Button
                        color= "#"
                        title = "Hourly-ride"
                        leftIcon={
                            <FontAwesome5 
                            name= "map-pin"
                            size={20}
                            color="#000000c0"
                            />
                        }
                        />
                        </View>
                    </View>
                    
                    <View style = {{backgroundColor:"#000000c0", marginLeft:20 ,marginRight:20 }}>

                         <View style={{flexDirection: "row" }}>

                           <View style={{ flex: 3 , textAlign:'center'  }}>

                             <View style= {{margin:15 }}>

                               <Text style = {{ height:30,fontFamily:"italic",backgroundColor:"#f15b2F", borderTopLeftRadius:5,borderTopRightRadius:5}}>PICK UP</Text>

                                <TextInput
                                   style = {{height:30, fontFamily:"italic" ,backgroundColor:"whitesmoke" ,  borderBottomLeftRadius:5,borderBottomRightRadius:5}}
                                   placeholder=""
                                   placeholderTextColor="grey"
                                   />
                                   </View>

                                   <View style = {{margin:15}}>
                                        <Text style = {{ height :30,fontFamily:"italic",backgroundColor:"#f15b2F", borderTopLeftRadius:5,borderTopRightRadius:5}}>PICKUP DATE</Text>
                                         <TextInput
                                          style = {{height:30 , backgroundColor:"whitesmoke" ,   borderBottomLeftRadius:5,borderBottomRightRadius:5}}
                                          placeholder=""
                                          placeholderTextColor="grey"
                                      />
                                   </View>

                                  <View style= {{margin:15}}>
                                        <Text style = {{ height :30,fontFamily:"italic",backgroundColor:"#f15b2F", borderTopLeftRadius:5,borderTopRightRadius:5}}> NO. OF TRAVLERS </Text>
                                           <TextInput
                                            style = {{height:30 , backgroundColor:"whitesmoke", borderBottomLeftRadius:5,borderBottomRightRadius:5}}
                                            placeholder=""
                                            placeholderTextColor="grey"
                                        />
                                   </View>
                       </View>




      
       <View style={{ flex: 3 , textAlign:"center"  }}>
                <View style= {{ margin:15}}>
                <Text style = {{ height :30,fontFamily:"Italic",backgroundColor:"#f15b2F", borderTopLeftRadius:5,borderTopRightRadius:5}}>DROP OFF</Text>
                <TextInput
                   style = {{height:30 , backgroundColor:"whitesmoke" , borderBottomLeftRadius:5,borderBottomRightRadius:5}}
                   placeholder=""
                   placeholderTextColor="grey"
                   />
                   </View>

                   <View style = {{margin:15}}>
                   <Text style = {{ height :30, fontFamily:"italic", backgroundColor:"#f15b2F", borderTopLeftRadius:5,borderTopRightRadius:5}}>PICKUP TIME</Text>
                <TextInput
                   style = {{height:30 , backgroundColor:"whitesmoke" , borderBottomLeftRadius:5,borderBottomRightRadius:5}}
                   placeholder=""
                   placeholderTextColor="grey"
                   />
                   </View>

                   <View>
                       <Text style = {{color : 'white'}}>Round Trip? </Text>
                   <View style = {{marginLeft:'35%' , marginTop:8}}>
                   </View>

                   </View>


                                   <View style= {{margin:20}}>
                                     <Button
                                       color="#"
                                       title = "SEARCH"
                                     />
                               </View>
                            </View>
                        </View>
                    </View>
            </ImageBackground>

            <TransferIconSec />
            </View>

        </View>
    )
}


export default TransferMainSec;