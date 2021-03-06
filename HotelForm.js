import React from 'react';
import { View ,Text , StyleSheet , TextInput , Button , ScrollView , TouchableOpacity  } from "react-native"
import Counter from '../Components/Counter';
import Cards from '../Screens/FlightSearchResult';
import BestOffer from '../Components/Home/BestOffer';
import COLOR  from '../assets/consts/colors'


const HotelForm = () => {
    return(
      <ScrollView>
        <View style= {styles.Main}>
          <View style ={styles.ContentDiv} >
            <View style = {styles.Form}>
               <View> 
                     <Text style = {styles.Text}>
                        Destination
                     </Text>
                </View>
                <View style= {styles.DestinationInput}>
                  <TextInput
                  placeholder="Destination"
                  placeholderTextColor='grey'
                  />
                </View>

        <View style = {{flexDirection:'row' , justifyContent:"space-between" , marginTop:15}}>
                
                <View>
                <View> 
                     <Text style = {styles.Text}>
                       Check-In
                     </Text>
                </View>
                  <TextInput
                  style= {styles.CheckInput}
                  placeholder="Check-In"
                  placeholderTextColor="#ccc"
                  />
                </View>

            
                <View >
                <View> 
                     <Text style = {styles.Text}>
                        Check-Out
                     </Text>
                </View>
                  <TextInput
                  style= {styles.CheckInput}
                  placeholder="Check-Out"
                  placeholderTextColor="#ccc"
                  />
                </View>

            
                <View>
                <View> 
                     <Text style = {styles.Text}>
                        Nights
                     </Text>
                </View>
                  <TextInput
                  style= {styles.CheckInput}
                  placeholder="Nights"
                  placeholderTextColor="#ccc"
                  />
                </View>
            </View>       
            </View>


            <View style= {{flexDirection:'row' , justifyContent:'space-around'}}>
             
              <View>
              <View>
                <Text style = {{marginTop:10 ,color:COLOR.secondary, marginLeft:14 }}>
                  Adult(+18)
                </Text>
              </View>   
              <View style= {{marginTop:10}}>
                <Counter />
                </View>
              </View>

             
              <View>
              <View>
                <Text style = {{marginTop:10 , marginLeft:5 ,color:COLOR.secondary}}>
                  Childern(0-12)
                </Text>
              </View>
      <View style= {{marginTop:10}}>
                <Counter />
                </View>
              </View>

             
              <View>
              <View>
                <Text style = {{marginTop:10 ,color:COLOR.secondary ,marginRight:5}}>
                  Infant(on Lap)
                </Text>
              </View>
                <View style= {{marginTop:10}}>
                <Counter />
                </View>
              </View>
            </View>
            <TouchableOpacity onPress={()=>alert('This is a button')}>
            <View style={{alignItems: 'center',justifyContent: 'center', marginTop:30,backgroundColor:COLOR.secondary, marginLeft:10 , marginRight:10,borderRadius:30}}>

                    <Text style={{color:COLOR.white, fontSize:20,padding:10,fontWeight:'bold'}}>Search Hotels</Text>
                    
                </View>
                </TouchableOpacity>
              <View style = {{marginTop:100}}>
              <BestOffer />
              </View>
              
          </View>
          
        </View>
       </ScrollView> 
    )
}


const styles  = StyleSheet.create({
  Main:{
    flex:1,
    backgroundColor:COLOR.primary
  },
  ContentDiv:{
    flex:1,
    backgroundColor:COLOR.white,
    marginTop:100,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  Form:{
    justifyContent:"center",
    margin:20
  },
  DestinationInput :{
    borderBottomWidth:1,
    borderBottomColor:COLOR.grey,
    height:30,
    paddingTop:10
  },
  Text:{
    color:COLOR.primary,
    fontWeight:'bold',
    marginTop:10

  },
  CheckInput:{
    borderBottomWidth:1,
    borderBottomColor:COLOR.grey,
    width:100,
    paddingTop:10
  }
})

export default HotelForm;