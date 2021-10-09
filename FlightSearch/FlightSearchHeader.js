import React from 'react'
import { Image , StyleSheet , View,Text, Button , TouchableOpacity } from 'react-native'
import  FontAwesome5  from 'react-native-vector-icons/FontAwesome5'
import FlightSearchCards from '../FlightSearch/FlightSearchCards'




const FlightSearch = () => {
  return (
    <View>
      <View style = {{  flexDirection:"row" , justifyContent:"space-between"}}>
        <View style ={{margin:10}}>
             <Image  
              source={require("../assets/Travomint.png")}
              style = {{resizeMode:"contain" , width:150, height:30 }}
            />
              </View>
               <View style = {{margin:15}}>
                     <Text>
                     <FontAwesome5 
                        name="phone-alt"
                        size={20}
                     />
                      +91-8010000200
                      </Text>
                </View>
      </View>
     

      <View style = {{height:60,backgroundColor:"#006ee3"  ,flexDirection:"row" , justifyContent:"space-between" }}>
       <View style={{marginLeft:10,marginTop:5}}>
             <TouchableOpacity>
               <Text style={{fontSize:15 , color:"white"}}>
                 DEL 
                 <FontAwesome5 
                    name="exchange-alt"
                    color="white"
                    size={20}
                 />
                   MAA
                </Text>
                <Text  style ={{color:"white"}}>
                  <FontAwesome5 
                  name="clock"
                  size={15}
                  color="white"
                   />
                   Oct 08 - Oct 10 | Class:Economy
                </Text>
             </TouchableOpacity>
       </View> 


            <View style={{margin:10 ,width:90 , height:35 , borderRadius:10, backgroundColor:"whitesmoke"  , justifyContent:"center" , alignItems:"center"}}>
          <TouchableOpacity>
          <Text style={{textTransform:"uppercase"}}>
          <FontAwesome5 
            name="pencil-alt"
            style = {{margin:2}} 
            />
            Modify
          </Text>
         </TouchableOpacity>
            </View>   
      </View>
        
          <View style = {{ shadowColor:"grey" , shadowOpacity:1.0,shadowRadius:4 }}>
              <Text style ={{margin:10, fontSize:20 , color:"#006ee3"}}>  
                <FontAwesome5  
                name="filter"
                size={22}
                color="#006ee3"
                />
                Filter
              </Text>
            </View>
            
            <View style ={{shadowColor:"grey" , shadowRadius:5, margin:20, borderRadius:5 }}>
          <TouchableOpacity>
            <View style = {{flexDirection:"row" }}>
              <View>
                  <Text style = {{margin:10  , fontWeight:'Bold', fontFamily:"Helvetica" }}>
                      Departure Flights
                  </Text>
                  </View>
                  <View style = {{marginLeft:100 , marginTop:8}}>
                    <FontAwesome5 
                    name="bell" 
                    size={15} 
                    color="#006ee3"
                    />
                  </View>
                  <View  style= {{ marginTop:6,marginLeft:10}}>
                    <Text style = {{color:"#006ee3"}}>
                      Fare Alerts
                    </Text>
                  </View>
                </View>
                <View>
                    <Text  style = {{margin:10  , fontWeight:'Bold', fontFamily:"Helvetica"}} >   
                      DEL-MAA| Fri,08 Oct 2021               
                     </Text>
                </View>
                </TouchableOpacity>
              </View>
    <FlightSearchCards />
    </View>
  )
}

export default FlightSearch;