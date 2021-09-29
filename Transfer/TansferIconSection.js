import React from 'react';
import {Text , View , Button , StyleSheet} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TransferReviewSec from './TransferReviewSec';






const TransferIconSec = () => {


    const Separator = () => (
        <View style = {styles.separator}></View>
    )


    return(
        <>
        <View>
           <View style  = {{backgroundColor:"whitesmoke", justifyContent:"space-between" , alignItems:'center' , height:'50%' }}>
               <View style= {{margin:20}}> 
               <FontAwesome5
               name="hourglass-end"
               size={64}
               color="#f15b2F"
               />
               </View>
               <View>
               <Text style = {{color:"#f15b2F", fontWeight:"bold"}} >Flight Delayed? We Wait for you</Text>
               </View>

               <View style = {{margin:20}}> 
               <FontAwesome5
               name="wallet"
               size={64}
               color="#f15b2F"
               />
               </View>
               <View>
               <Text style ={{color:"#f15b2F" , fontWeight:"bold"}} >Budget to Premium options</Text>
               </View>

               <View style = {{margin:20}}> 
               <FontAwesome5
               name="ban"
               size={64}
               color="#f15b2F"
               />
               </View>
               <View>
               <Text style ={{color:"#f15b2F" , fontWeight:"bold"}} >Online Cancellation on 99% of rides</Text>
               </View>


               <View style = {{margin:20 }}> 
               <FontAwesome5
               name="headset"
               size={64}
               color="#f15b2F"
               />
               </View>
               <View>
               <Text style = {{color:'#f15b2F', fontWeight:"bold"}}>24/7 Customer Service</Text>
               </View>
          </View>
            

             <Separator />



         <View>
                <View style = {{justifyContent:'space-between', backgroundColor:"white" , alignItems:"center"}}>
                    <View style = {{ 
                    borderRadius:"50%",
                    width:80 , 
                    height:80 , 
                    backgroundColor:"#f15b2F" , 
                    border:"1px Solid #f15b2F" ,
                    margin:20,  
                    justifyContent:"center",
                    alignItems:"center"
                    }}>

                    <FontAwesome5
                    name="search"
                    color="white"
                    size={34}
                    />
                    </View>


                    <View style = {{justifyContent:'space-between' , alignItems:"center"}} >
                        <View>
                        <Text style = {{fontWeight:'bold', fontSize:20 ,color:'#f15b2F'}}>
                            Search
                           </Text>
                           </View>
                        <View>
                           <Text style = {{color:'#f15b2F'}}>
                                Let us know where you'd like to go.
                            </Text>
                        </View>
                    </View>

                 
                 <View style ={{margin:10}}>
                     <FontAwesome5 
                     name="angle-down"
                     size={20}
                     color="#f15b2F"
                     />
                 </View>


                    <View style = {{justifyContent:"center" , alignItems:"center"}}>
                        <View style = {{ 
                    borderRadius:"50%",
                    width:80 , 
                    height:80 , 
                    backgroundColor:"#f15b2F" , 
                    border:"1px Solid #f15b2F" ,
                    margin:20,  
                    justifyContent:"center",
                    alignItems:"center"
                    }}>
                           <FontAwesome5 
                              name="hand-point-up"
                              size={34}
                              color="white"
                            />
                        </View>
                        <View style = {{justifyContent:"center" , alignItems:"center"}}>
                            <Text style = {{ fontWeight:'bold' ,fontSize:20, color:"#f15b2F"}}>
                                Choose
                            </Text>
                            <View >
                                <Text style={{color:'#f15b2F'}}>
                                  we'll show you Options , choose the right one for you. 
                                </Text>
                            </View>

                            
                            <View style ={{margin:10}}>
                                   <FontAwesome5 
                                        name="angle-down"
                                        size={20}
                                        color="#f15b2F"
                                   />
                              </View>


                            <View style = {{justifyContent:"center", alignItems:"center"}}>
                                <View style = {{  borderRadius:"50%",
                                                width:80 , 
                                                height:80 , 
                                                backgroundColor:"#f15b2F" , 
                                                border:"1px Solid #f15b2F" ,
                                                margin:20,  
                                                justifyContent:"center",
                                                alignItems:"center"}} >
                                                    <FontAwesome5
                                                    name ="check"
                                                    size={34}
                                                    color="white" />
                                </View>
                                <View style = {{justifyContent:"center", alignItems:"center"}}>
                                    <View> 
                                    <Text style ={{color :"#f15b2F" , fontSize:20, fontWeight:'bold'}}>
                                        Book
                                    </Text>
                                </View>
                                <View >
                                    <Text style = {{color:"#f15b2F"}}>
                                        Book and receive instant confirmation!
                                    </Text>
                                </View>
                                </View>
                            </View>

                            <View style = {{marginTop:20 ,  width:'80%'}}>
                                <Button
                                title="GIVE IT A TRY!"
                                color="#f15b2F"
                                
                                />
                            </View>


                        </View>
                    </View>



                    
                </View>
          </View>
       


         <TransferReviewSec />

        </View>
       </>       
    )
}

const styles = StyleSheet.create({
    separator:{
        marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    }
}) 



export default TransferIconSec;