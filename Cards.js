import React, { useState } from 'react'
import { View , Text, FlatList , StyleSheet, Dimensions , Modal,Image ,  Alert , TouchableOpacity } from "react-native"
import FlightData from './Data/FlightData'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import moment from 'moment';


const WindowWidth = Dimensions.get('window').width
const WindowHeight = Dimensions.get('window').height




const Cards = ( )=>{


 

const ConvertMinsToTime = ({data}) => {
        let hours = Math.floor(data / 60);
        let minutes = data % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return `${hours}h:${minutes}m`;
      }
      const HeaderButtons = (props) =>{
        return(
            <View>
            <TouchableOpacity activeOpacity={0.6} style={{
                backgroundColor: props.activetab === props.text ? "#195fb9" : "white",
                borderRadius:30,
                paddingVertical:6,
                paddingHorizontal:16,
            }}
            onPress={() => props.setActiveTab(props.text)}
            >
                <Text style={{color: props.activetab === props.text?"white":"#195fb9",fontSize:15,fontWeight:'900'}}>{props.text}</Text>
            </TouchableOpacity>
            </View>
        )
    }



    const Flight = ({Flight}) => {
    
        const [modalVisible, setModalVisible] = useState(false);
    
   
        return(
           <> 
            <View style={{flexDirection:'row' ,justifyContent:'space-around'}}>
                <View style = {styles.card}>   
                         <View>
                            <Text style={{fontSize:15,marginLeft:4 , fontWeight:'bold'}}>{Flight.inBound[0].fromAirport}</Text>
                            <Text  style= {{fontWeight:'bold' , marginLeft:2}}>{Flight.inBound[0].depDate.split("T")[1]}</Text>
                         </View>
                         <View style = {{flexDirection:'row' }}>
                             <Text style ={{fontWeight:'bold' , marginLeft:1 }}>
                             {Flight.inBound[0].depDate.split("T")[0]}  
                             </Text>
                         </View>
                       </View>
                       <View style= {styles.icon}>
                                    <FontAwesome5
                                    name="plane" 
                                    style= {{marginLeft:14}}
                                    color="#195fb9"
                                    size={24} /> 
                            <View style ={styles.iconText}>
                             <Text style={{fontSize:14 ,marginLeft:5, fontWeight:"bold"}}> <ConvertMinsToTime data = {Flight.inBound[0].eft}/></Text>
                          </View> 
                    </View>

                    <View style ={styles.card}>
                                <View>
                                <Text style={{fontSize:15 , fontWeight:'bold' , marginLeft:2}}>{Flight.inBound[0].toAirport}</Text>
                                <Text  style= {{fontWeight:'bold' , marginLeft:2}}>{Flight.inBound[0].reachDate.split("T")[1]}</Text>
                               </View>
                               <View style = {{flexDirection:'row' }}>
                               <Text style ={{fontWeight:'bold' }}>
                             {Flight.inBound[0].depDate.split("T")[0]}
                             </Text>
                         </View>
                            </View>
            </View>
            <View style = {styles.refundableDiv}>
                           <View style = {styles.shadowContainerStyle}>
                               <View style = {styles.InsideRefundable}>
                                    <Text style= {{ fontWeight:"bold" , fontSize:15 }}>
                                        Refundable
                                    </Text>
                                    <View style= {{flexDirection:'row' , justifyContent:'space-between'  }}>
                                    <Text style ={{  fontWeight:"bold" , fontSize:20 , marginTop:32}}>
                                    {`₹ ${Flight.fare.grandTotal}`}0
                                    </Text>
                                    <TouchableOpacity onPress={() => setModalVisible(true)} style ={{flexDirection:'row'}} >
                                         <Text  style ={{marginLeft:20 , color:"#195fb9" , marginBottom:10, marginTop:32 ,fontWeight:"bold" , fontSize:15}}> Details
                                        </Text>
                                        <View style ={styles.icon}>
                                            <FontAwesome5
                                             name="info-circle"
                                             size={24}
                                             color="#195fb9" 
                                             />
                                        </View>
                                        </TouchableOpacity>    
                                        </View>
                               </View>
                               {/* <View style ={{backgroundColor:'#195fb9' ,borderRadius:30 , marginLeft:100 , marginBottom:10, justifyContent:'center', alignItems:'center',height:40,width:150 , }}>
                                   <Text style = {{fontWeight:'bold', color:'white' , fontSize:20 }}>
                                       BOOK NOW
                                   </Text>
                                   </View> */}
                           </View>
                       </View>

                    <View>
                    <View style={styles.centeredView}>
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
              <View style = {{alignItems:"flex-end" , justifyContent:"flex-end" , margin:10}}>
                  <FontAwesome5
                  name="times-circle"
                  size={20}
                  onPress={() => setModalVisible(!modalVisible)}
                  />
              </View>
            <Text style= {styles.modalText}>Flight Details</Text>
            <View style = {{flexDirection:'row' , justifyContent:"space-around"}}>
              <Text >
                  Chennai-NewDelhi
              </Text>
              <Text style = {{marginRight:5}}> 
                  Mon, Nov 01 2021
              </Text>
          </View>
        
          <View style = {{margin:10 , justifyContent:"center", borderWidth:1 , borderColor:"whitesmoke" }}>
              <Text>
              The baggage information is just for reference. Please Check with airline before check-in. For more information, visit the airline's official website.
              </Text>
          </View>
          <View style={{alignItems:'center' , marginRight:5}}>
          <Image 
        source={require('./assets/INDIGO.png')}
        style={{width:50,height:50 , resizeMode:'contain'}} />
        </View>
          <View style = {{justifyContent:'center', alignItems:'center'}}>
              <View>
              </View>
          <View style= {{margin:10}}>
          <Text style = {{fontWeight:'bold', marginLeft:10}}>
              Indigo , SG266
          </Text>
          <Text>
          Operated by Indigo
          </Text>
          </View>
          <View style= {{margin:10}}>
              <Text style = {{fontWeight:'bold'}}>
                  Check-In Baggage
              </Text>
              <Text style= {{marginLeft:8 , marginTop:2}}>
                  15 kg per person
              </Text>
              <Text style = {{fontWeight:'bold' , marginTop:10 , marginLeft:8 }}>Cabin Baggage</Text>
              <Text style={{ marginLeft:10 , marginTop:2}}>
                  7 kg per person
              </Text>
          </View>
          <View style= {{margin:10}}>
              <Text style = {{fontWeight:'bold' , marginLeft:16, marginTop:2}}>
              Chennai(MAA)
              </Text>
              <Text style = {{marginLeft:5 , marginTop:2}}>Chennai International</Text>
              <Text style= {{ marginLeft:40 , marginTop:2}}>8:00 PM</Text>
          </View>
          </View>
          </View>

          <View style= {{flexDirection:'row' , justifyContent:'space-between' , backgroundColor:'whitesmoke'}}>
         <View style= {{
           width:160,
           marginTop:11,
           height:2,
           backgroundColor:"#195fb9"
           }}>
         </View>
         <View>
           <FontAwesome5
           name="plane"
           size={24}
           color="#195fb9"
           />
         </View>
         <View style= {{
           width:170,
           height:2,
           marginTop:11,
           backgroundColor:"#195fb9"
           }}>
         </View>
       </View>

       <View style ={{justifyContent:'center' , backgroundColor:'whitesmoke' ,alignItems:'center'}}>
         <View>
           <Text style= {{marginLeft:25 , fontWeight:"bold"}}>
             New-delhi(DEL)
           </Text>
           <Text>
             Indira Gandhi International
           </Text>
           <Text style = {{marginLeft:50 , marginBottom:20}}>
             08:45 AM
           </Text>
         </View>
       </View>
        </View>
      </Modal>
      </View>
                    </View>
           </> 
        )
    }

    const [activeTab,setActiveTab] = useState("Go")


    return(
        <View style = {styles.container}>
            <View style= {styles.contentDiv}>
            <View style= {styles.btn}>
            <View>
            <Text><HeaderButtons 
            text="Go"
            btncolor="#195fb9" 
            textcolor="white"
            activetab={activeTab}
            setActiveTab={setActiveTab}/></Text>
            </View>
            <View>
            <Text>
              <HeaderButtons
             text="Return" 
             btncolor="white" 
             textcolor="#195fb9"
             activetab={activeTab}
            setActiveTab={setActiveTab}/></Text>
            </View>
                </View>
                <View>
                     <FlatList
                    data={FlightData.flightResult}
                    renderItem={({item}) => <Flight Flight={item} />}
                    ItemSeparatorComponent={(props) => {
                      console.log('props', props);
                      return (<View style={{height: 1 , marginVertical:10 , marginHorizontal:5, backgroundColor: props.highlighted ? 'green' : 'rgb(199, 199, 204)'}} />);
                    }}
                    keyExtractor={(item,index) => index.toString()}
                    showHorizontalScrollIndicator={false}
                    />
                </View> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#195fb9'
    },
    contentDiv:{
        flex:1,
        backgroundColor:'white',
        marginTop:150,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },
    btn:{
        flexDirection:'row',
        alignSelf: 'center',
        margin:20,
        borderWidth:1,
        borderColor:"#195fb9", 
        borderRadius:30
    },
    card:{
        marginTop:10,
    },
    icon:{
        marginTop:18,
        justifyContent:'center',
    },
    refundableDiv:{
        // elevation:1,
        marginTop:10,
        borderRadius:20,
        justifyContent:'center', 
        alignItems:'center'
    },
    iconText:{
        justifyContent:'center',
    },
 shadowContainerStyle: {
    borderWidth:1,
    borderColor:'rgb(199, 199, 204)',
    width:290,
    borderRadius:10,
    height:100
  },
  InsideRefundable:{
    margin:10,
    borderRadius:20, 
    shadowOpacity:10, 
    shadowColor:'#ccc', 
    shadowRadius:20  
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    marginTop: 10
  },
  modalView: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor:'whitesmoke'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {

    marginBottom:20,
    fontSize:30,
    fontWeight:"bold",
    textAlign: "center"
  },
  });
  


export default Cards;