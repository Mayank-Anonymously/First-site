import React from "react";
import {View, Text , Image} from 'react-native'


const Person1 = {uri:'https://static.generated.photos/vue-static/face-generator/landing/wall/20.jpg'}
const Person2 = {uri:'https://petapixel.com/assets/uploads/2019/02/download-2-800x800.jpeg'}
const Person3 = {uri:"https://petapixel.com/assets/uploads/2019/02/download-3-800x800.jpeg"}


const TransferReviewSec = () => {
    return(
        <View style = {{backgroundColor:"#fffaf0" , justifyContent:"center", alignItems:"center"}}>
            <View>
                <Text style = {{ margin:20,  fontSize:28 }}>
                    What Customers Have Said
                </Text>
            </View>
            <View style = {{marginTop:20, width:'80%' }}>
            <View style= {{marginRight:150 , flexDirection:"row"}}>
                <View>
                <Image
                 source = {Person1}
                 style= {{resizeMode:'contain' , width:70 , height:70, border:"1px solid black" ,borderRadius:"50%" }}
                />
                </View>
                <View>
                    <Text style = {{fontSize:20, fontFamily:"Italic monospace" , margin:20}}>
                        Charles J.
                    </Text>
                </View>
          </View>

                <Text style ={{backgroundColor:"white"}}>
                    <View style = {{margin:20}}>
                    The cab was waiting at our apartment as requested for 4:45am Morning. Driver was professional and ride was smooth. Reservation was simple and quick. Highly recommend without a doubt.
                    </View>
                </Text>
            </View>
           

           {/* 2nd person */}
            <View style = {{marginTop:20, width:'80%' }}>
            <View style= {{marginRight:150 , flexDirection:"row"}}>
                <View >
                <Image
                 source = {Person2}
                 style= {{resizeMode:'contain' , width:70 , height:70, border:"1px solid black" ,borderRadius:"50%" }}
                />
                </View>
                <View>
                    <Text style = {{fontSize:20, fontFamily:"Italic monospace" , margin:20}}>
                        Kar S.
                    </Text>
                 </View>
          </View>
                <Text style ={{backgroundColor:"white"}}>
                    <View style = {{margin:20}}>
                    The ride was a surprise for my wife's visit. She was thrilled and the driver was extremely nice.
                    </View>
                </Text>
            </View>

          {/* 3rd person */}
            <View style = {{marginTop:20, width:'80%' }}>
           <View>
            <View style= {{marginRight:150,flexDirection:'row'}}>
               <View>
                <Image
                 source = {Person3}
                 style= {{resizeMode:'contain' , width:70 , height:70, border:"1px solid black" ,borderRadius:"50%" }}
                /></View>
                <View>
                    <Text style = {{margin:20 ,  fontSize:20 , fontFamily:"Italic monospace" }}>
                        Talvin D.
                    </Text>
                
                </View>
                </View>
          </View>

                <Text style ={{backgroundColor:"white"}}>
                    <View style = {{margin:20}}>
                    My ride and driver were great, he was very nice, talkative but not too much and ON TIME which is very important to me. I give your service a 5 out of 5 stars.
                    </View>
                </Text>
            </View>
        </View>
    )
}

export default TransferReviewSec;