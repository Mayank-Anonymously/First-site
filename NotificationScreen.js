// // import React,{useState} from 'react';
// // import {View, StyleSheet,Text,FlatList,Alert, Modal , Pressable ,TouchableOpacity,CheckBox,Image} from 'react-native';
// // import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// // import FlightData from '../FlightData'



// // const Notificationscreen = () => {

// //   const ConvertMinsToTime = ({data}) => {
// //   let hours = Math.floor(data / 60);
// //   let minutes = data % 60;
// //   minutes = minutes < 10 ? '0' + minutes : minutes;
// //   return `${hours}h:${minutes}m`;
// // }

// //     const Flight = ({Flight}) => {
// //         const [modalVisible, setModalVisible] = useState(false);

// //         const [isSelected , setSelection] = useState(false);
// //         return (      

// //    <>
// //             <TouchableOpacity
// //             activeOpacity={0.8}>
// //            <View style={{margin:10}}>
// //               <View  style = {{ flexDirection:"row" ,justifyContent:"space-between",padding:20,height:120 ,borderWidth: 1,
// //     borderRadius: 5,
// //     borderColor: '#ddd',
// //     borderBottomWidth: 0,
// //     shadowColor: '#000000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.9,
// //     shadowRadius: 3,
// //     elevation: 3,}}>
// //                     <View style={{flexDirection:'row'}}>
// //                     <Image  
// //                     source ={require('../assets/Image/INDIGO.png')}
// //                     style ={{resizeMode:'cover', width:35 ,height:35,marginRight:8}}
// //                     />
// //                     {/* <Text>{Flight.inBound[0].airline}</Text> */}
// //                     <View>
// //                         <Text>{Flight.inBound[0].depDate.split("T")[1]}</Text>
// //                         <Text>{Flight.inBound[0].reachDate.split("T")[1]}</Text>
// //                         <Text>{Flight.inBound[0].airlineName}</Text>
// //                         <View style={{flexDirection: 'row',paddingTop:12,alignItems: 'center'}}>
// //                             <FontAwesome5 name="hand-point-right" size={10} color="gray"/>
// //                         <Text style={{color:"gray",marginLeft:5,fontSize:10}}
// //                         onPress={() => setModalVisible(true)}
// //                         >Details</Text>
// //                         </View>
// //                     </View>
// //                     </View>
// //                     <View>
// //                         <Text style={{fontSize:14}}> <ConvertMinsToTime data = {Flight.inBound[0].eft}/></Text>
// //                         <Text style={{fontSize:10}}>(Non-stop)</Text>
// //                         <View style={{flexDirection:'row'}}>
// //                             <Text style={{fontSize:10}}>{`${Flight.inBound[0].fromAirport} -  ${Flight.inBound[0].toAirport}`}</Text>
// //                         </View>
// //                         <Text style={{fontWeight:'bold'}}>SG-266</Text>
// //                     </View>
// //                     <View>
// //                         <Text style={{ fontSize:18, fontWeight:'bold'}}>{`₹ ${Flight.fare.grandTotal}`}</Text>
// //                         <View style ={{marginLeft:5, flexDirection:"row-reverse",flex:1, justifyContent:"flex-end" ,alignItems:"center" }} >
// //                                  {/* <Text>{isSelected?'Selected' : 'Select'}</Text> */}
// //                                     <CheckBox
// //                                         size = {20}
// //                                         value={isSelected }
// //                                         onValueChange={setSelection}
// //                                         />
// //                            </View>
// //                     </View>
// //                     </View>
// //                            </View>
// //           </TouchableOpacity>


// //           <View style={styles.centeredView}>
// //       <Modal
// //         animationType="slide"
// //         transparent={true}
// //         visible={modalVisible}
// //         onRequestClose={() => {
// //           Alert.alert("Modal has been closed.");
// //           setModalVisible(!modalVisible);
// //         }}
// //       >
// //         <View style={styles.centeredView}>
// //           <View style={styles.modalView}>
// //               <View style = {{alignItems:"flex-end" , justifyContent:"flex-end" , margin:10}}>
// //                   <FontAwesome5
// //                   name="times-circle"
// //                   size={30}
// //                   color="#195fb9"
// //                   onPress={() => setModalVisible(!modalVisible)}
// //                   />
// //               </View>
// //             <Text style= {styles.modalText}>Flight Details</Text>
// //             <View style = {{flexDirection:'row' , justifyContent:"space-around"}}>
// //               <Text >
// //                   Chennai-NewDelhi
// //               </Text>
// //               <Text style = {{marginRight:5}}> 
// //                   Mon, Nov 01 2021
// //               </Text>
// //           </View>
        
// //           <View style = {{margin:10 , justifyContent:"center", borderWidth:1 , borderColor:'grey' , borderRadius:10  }}>
// //               <Text style = {{ margin:5}} >
// //               The baggage information is just for reference. Please Check with airline before check-in. For more information, visit the airline's official website.
// //               </Text>
// //           </View>
// //           <View style={{alignItems:'center' , marginRight:5}}>
// //           <Image 
// //         source={require('../assets/Image/INDIGO.png')}
// //         style={{width:50,height:50 , resizeMode:'contain'}} />
// //         </View>
// //           <View style = {{justifyContent:'center', alignItems:'center'}}>
// //               <View>
// //               </View>
// //           <View style= {{margin:10}}>
// //           <Text style = {{fontWeight:'bold', marginLeft:10}}>
// //               Indigo , SG266
// //           </Text>
// //           <Text>
// //           Operated by Indigo
// //           </Text>
// //           </View>
// //           <View style= {{margin:10}}>
// //               <Text style = {{fontWeight:'bold'}}>
// //                   Check-In Baggage
// //               </Text>
// //               <Text style= {{marginLeft:8 , marginTop:2}}>
// //                   15 kg per person
// //               </Text>
// //               <Text style = {{fontWeight:'bold' , marginTop:10 , marginLeft:8 }}>Cabin Baggage</Text>
// //               <Text style={{ marginLeft:10 , marginTop:2}}>
// //                   7 kg per person
// //               </Text>
// //           </View>
// //           <View style= {{margin:10}}>
// //               <Text style = {{fontWeight:'bold' , marginLeft:16, marginTop:2}}>
// //               Chennai(MAA)
// //               </Text>
// //               <Text style = {{marginLeft:5 , marginTop:2}}>Chennai International</Text>
// //               <Text style= {{ marginLeft:40 , marginTop:2}}>8:00 PM</Text>
// //           </View>
// //           </View>
// //           </View>
// //         </View>

// //        <View style= {{flexDirection:'row' , justifyContent:'space-between' , backgroundColor:'whitesmoke'}}>
// //          <View style= {{
// //            width:160,
// //            marginTop:11,
// //            height:2,
// //            backgroundColor:"#195fb9"
// //            }}>
// //          </View>
// //          <View>
// //            <FontAwesome5
// //            name="plane"
// //            size={24}
// //            color="#195fb9"
// //            />
// //          </View>
// //          <View style= {{
// //            width:170,
// //            height:2,
// //            marginTop:11,
// //            backgroundColor:"#195fb9"
// //            }}>
// //          </View>
// //        </View>

// //        <View style ={{justifyContent:'center' , backgroundColor:'whitesmoke' ,alignItems:'center'}}>
// //          <View>
// //            <Text style= {{marginLeft:25 , fontWeight:"bold"}}>
// //              New-delhi(DEL)
// //            </Text>
// //            <Text>
// //              Indira Gandhi International
// //            </Text>
// //            <Text style = {{marginLeft:50 , marginBottom:20}}>
// //              08:45 AM
// //            </Text>
// //          </View>
// //        </View>

// //       </Modal>
// //       {/* <Pressable
// //         style={[styles.button, styles.buttonOpen]}
// //         onPress={() => setModalVisible(true)}
// //       >
// //         <Text style={styles.textStyle}>Show Modal</Text>
// //       </Pressable> */}
// //     </View>



// // </>
          
// //         );
// //       };



// //     return (
// //         <View style={styles.container}>
          
// //    <View style={{marginVertical:10,marginLeft:20}}>
// //      <Text style={{fontSize:20,fontWeight:'bold'}}>Suggested Flights</Text>
// //    </View>
// //             <FlatList
// //             contentContainerStyle={{paddingHorizontal:5,paddingVertical:10}}
// //             showsHorizontalScrollIndicator={false}
// //             data={FlightData.flightResult}
// //             keyExtractor = {(item, index) => index.toString()}
// //             renderItem={({item}) => <Flight Flight={item} />}
// //           />
// //         </View>
// //     );
// // }

// // const styles = StyleSheet.create({
// //     container: {
// //         flex:1,
// //         backgroundColor:"#fff",
// //     },
// //     centeredView: {
// //         flex: 1,
// //         justifyContent: "flex-end",
// //         marginTop: 10
// //       },
// //       modalView: {
// //         borderTopLeftRadius: 40,
// //         borderTopRightRadius: 40,
// //       backgroundColor:'whitesmoke'
// //       },
// //       buttonClose: {
// //         backgroundColor: "#2196F3",
// //       },
// //       textStyle: {
// //         color: "white",
// //         fontWeight: "bold",
// //         textAlign: "center"
// //       },
// //       modalText: {
// //         marginBottom:20,
// //         fontSize:30,
// //         fontWeight:'bold',
// //         textAlign: "center"
// //       },
// // })

// // export default Notificationscreen;
import React from 'react'
import { View,Text , Dimensions, StyleSheet , Image , ScrollView } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import COLOR from '../assets/consts/colors';

const Width=Dimensions.get('window').width
const height=Dimensions.get('window').height

const Separator = () => (
  <View style={styles.separator} />
);

const NotificationScreen = () =>{
  return(
    
    <>
    <View style = {{backgroundColor:COLOR.primary , flex:1}}>
    
        <ScrollView>
          <View style= {{flexDirection:'row' , backgroundColor:COLOR.secondary , borderRadius:10 , marginTop:10 , marginHorizontal:10}}> 
            <View style = {styles.Logo}>
              <View>
                <Image
                  source={require('../assets/Image/logoT.png')}
                  style= {{resizeMode:"contain" , width:20 , height:20 , marginLeft:9}} 
                />
                 <Text style= {{color:COLOR.primary}}>Flights</Text>
              </View>  
            </View>
            <View>
                  <Text style= {{marginTop:20, color:COLOR.white , fontWeight:'bold' , marginLeft:5 }}>
                    Flat 100 OFF On Domestic Flight
                  </Text>
                  <View style = {{flexDirection:'row' , justifyContent:'space-between'}}>
                <View>
               <Text style = {{marginLeft:5 , color:COLOR.white }}> 
                    Flat 100 OFF Discount For New User only
                  </Text>
                  </View>

                  <View style = {{marginLeft:5}}>
                  <FontAwesome5
                  name="chevron-right"
                  color={COLOR.white}
                  size={18}
                  />
                  </View>
                  </View>
                  
                </View>
                </View>
            <Separator />


            <View style= {{flexDirection:'row' , backgroundColor:COLOR.secondary , borderRadius:10 , marginTop:10 , marginHorizontal:10}}> 
            <View style = {styles.Logo}>
              <View>
                <Image
                  source={require('../assets/Image/logoT.png')}
                  style= {{resizeMode:"contain" , width:20 , height:20 , marginLeft:9}} 
                />
                 <Text style= {{color:COLOR.primary}}>Flights</Text>
              </View>  
            </View>
            <View>
                  <Text style= {{marginTop:20, color:COLOR.white , fontWeight:'bold' , marginLeft:5 }}>
                    Flat 100 OFF On Domestic Flight
                  </Text>
                  <View style= {{flexDirection:'row'}}>
                  <View>
               <Text style = {{marginLeft:5 , color:COLOR.white }}> 
                    Flat 100 OFF Discount For New User only
                  </Text>
                  </View>

                  <View style = {{marginLeft:5}}>
                  <FontAwesome5
                  name="chevron-right"
                  color={COLOR.white}
                  size={18}
                  />
                  </View>
                  </View>
                </View>
                </View>
                <Separator />


                <View style= {{flexDirection:'row' , backgroundColor:COLOR.secondary , borderRadius:10 , marginTop:10 , marginHorizontal:10}}> 
            <View style = {styles.Logo}>
              <View>
                <Image
                  source={require('../assets/Image/logoT.png')}
                  style= {{resizeMode:"contain" , width:20 , height:20 , marginLeft:9}} 
                />
                 <Text style= {{color:COLOR.primary}}>Flights</Text>
              </View>  
            </View>
            <View>
                  <Text style= {{marginTop:20, color:COLOR.white , fontWeight:'bold' , marginLeft:5 }}>
                    Flat 100 OFF On Domestic Flight
                  </Text>
                  <View style = {{flexDirection:'row'}}>
                <View>
               <Text style = {{marginLeft:5 , color:COLOR.white }}> 
                    Flat 100 OFF Discount For New User only
                  </Text>
                  </View>

                  <View style = {{marginLeft:5}}>
                  <FontAwesome5
                  name="chevron-right"
                  color={COLOR.white}
                  size={18}
                  />
                  </View>
                  </View>
                </View>
                </View>
                <Separator />


                <View style= {{flexDirection:'row' , backgroundColor:COLOR.secondary , borderRadius:10 , marginTop:10 , marginHorizontal:10}}> 
            <View style = {styles.Logo}>
              <View>
                <Image
                  source={require('../assets/Image/logoT.png')}
                  style= {{resizeMode:"contain" , width:20 , height:20 , marginLeft:9}} 
                />
                 <Text style= {{color:COLOR.primary}}>Flights</Text>
              </View>  
            </View>
            <View>
                  <Text style= {{marginTop:20, color:COLOR.white , fontWeight:'bold' , marginLeft:5 }}>
                    Flat 100 OFF On Domestic Flight
                  </Text>
                  <View style = {{flexDirection:'row'}}>
                <View>
               <Text style = {{marginLeft:5 , color:COLOR.white }}> 
                    Flat 100 OFF Discount For New User only
                  </Text>
                  </View>

                  <View style = {{marginLeft:5}}>
                  <FontAwesome5
                  name="chevron-right"
                  color={COLOR.white}
                  size={18}
                  />
                  </View>
                  </View>
                </View>
                </View>
                <Separator />

                <View style= {{flexDirection:'row' , backgroundColor:COLOR.secondary , borderRadius:10 , marginTop:10 , marginHorizontal:10}}> 
            <View style = {styles.Logo}>
              <View>
                <Image
                  source={require('../assets/Image/logoT.png')}
                  style= {{resizeMode:"contain" , width:20 , height:20 , marginLeft:9}} 
                />
                 <Text style= {{color:COLOR.primary}}>Flights</Text>
              </View>  
            </View>
            <View>
                  <Text style= {{marginTop:20, color:COLOR.white , fontWeight:'bold' , marginLeft:5 }}>
                    Flat 100 OFF On Domestic Flight
                  </Text>
                
                <View style = {{flexDirection:'row'}}>
                <View>
               <Text style = {{marginLeft:5 , color:COLOR.white }}> 
                    Flat 100 OFF Discount For New User only
                  </Text>
                  </View>

                  <View style = {{marginLeft:5}}>
                  <FontAwesome5
                  name="chevron-right"
                  color={COLOR.white}
                  size={18}
                  />
                  </View>
                  </View>
                </View>
                </View>
                <Separator />

                <View style= {{flexDirection:'row' , backgroundColor:COLOR.secondary , borderRadius:10 , marginTop:10 , marginHorizontal:10}}> 
            <View style = {styles.Logo}>
              <View>
                <Image
                  source={require('../assets/Image/logoT.png')}
                  style= {{resizeMode:"contain" , width:20 , height:20 , marginLeft:9}} 
                />
                 <Text style= {{color:COLOR.primary}}>Flights</Text>
              </View>  
            </View>
            <View>
                  <Text style= {{marginTop:20, color:COLOR.white , fontWeight:'bold' , marginLeft:5 }}>
                    Flat 100 OFF On Domestic Flight
                  </Text>
                  <View style = {{flexDirection:'row'}}>
                <View>
               <Text style = {{marginLeft:5 , color:COLOR.white }}> 
                    Flat 100 OFF Discount For New User only
                  </Text>
                  </View>

                  <View style = {{marginLeft:5}}>
                  <FontAwesome5
                  name="chevron-right"
                  color={COLOR.white}
                  size={18}
                  />
                  </View>
                  </View>
                </View>
                </View>
                <Separator />
        </ScrollView>
    </View>

    </>

  )
}

const styles = StyleSheet.create({
  NotifyDiv:{
  },
  Logo:{
      width:50,
      margin:10,
      height:50,
      borderRadius:50,
      justifyContent:"center",
      borderWidth:1,
      borderColor:COLOR.grey,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:COLOR.white,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: COLOR.primary,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})


export default NotificationScreen;