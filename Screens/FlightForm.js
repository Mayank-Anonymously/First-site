import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import  FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import { Input } from "react-native-elements/dist/Input";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { IconButton, Colors } from 'react-native-paper';



const FlightForm = () => {

const [selectedValue , setSelectedValue] = useState("Select Class")
 const [secondselectedValue , setSecondSelectedValue] = useState("Select")

const Separator = () => (
  <View style ={styles.separator}></View>
)


  return (
    <View>
         <View style = {{flexDirection:'column'}}> 
             <View style ={{ flex:5, flexDirection:'row' , justifyContent: "space-around", marginTop:10}}>
                <Button title="Round Trip" color="#F15b2F"   />
                <Button title="one way"  color ="#F15b2F"  /> 
             </View>
         </View>
      
     <View style={[styles.container, {
          flexDirection: "row"
        }]}>
      <View style={{ flex: 3   }}>
     
       <View>
       <Input
            style={styles.placeholder}
            placeholder="Flying From"
            placeholderTextColor="grey"
            leftIcon={
                <FontAwesome5 
               size={22}
                name="map-marker-alt"
                color="#F15b2F"
           />
           }
        />



       <Input 
            style={styles.placeholder}
            placeholder="Departure"
            placeholderTextColor="grey"
            leftIcon={
                <FontAwesome5 
                 size={22}
                 name="calendar-alt"
                 color="#F15b2F"
              />
             } 
         />
                    {/* First DropDown (Picker) menu */}
         <View style ={{margin:10,borderBottomColor:"black"}}>
             <Picker   
                selectedValue={secondselectedValue}
                style={{height:50   ,   width:   150,border:'none', backgroundColor:'#fff'}}
                onValueChange={(itemValue,itemIndex) => setSecondSelectedValue(itemValue)}>
                  <Picker.Item label = "Select"/>
                  <Picker.Item label = "Adult(18+)" value="Adutl"  />
                  <Picker.Item label = "Children(2-11YRS)" value="Children" />
                  <Picker.Item label = "Infant(On lap)" value="Infant(on lap)" />
              </Picker>
           </View>
        </View>
      </View>

<View style={{margin:10}}>
      <FontAwesome5
      style={{marginTop:30, border:'1px solid #F15b2F',borderRadius:'50%'}}
      name="exchange-alt"
      size={36}
      color ="#F15b2F" />
</View>


      <View style={{ flex: 3,  }} >
        <Input
        style={styles.placeholder}
        placeholder="Flying To"
        placeholderTextColor="grey"
        leftIcon={
          <FontAwesome5 
          name="map-marker-alt"
          size={20}
          color="#F15b2F"
          />
        }
        />

    <Input
        style={styles.placeholder}
        placeholder="Return"
        placeholderTextColor="grey"
        leftIcon={
            <FontAwesome5 
            size={22}
            name="calendar-alt"
            color="#F15b2F"
         />
        }
         />



{/* second DropDown menu (picker) */} 
   <View style ={{margin:10 }}>
        <Picker 
            selectedValue={selectedValue}
            style={{height:50 , width: 150,border:'none', backgroundColor:'#fff',borderBottomEndColor:"black"}} 
            onValueChange={(itemValue,itemIndex) => setSelectedValue(itemValue)}
            >
               <Picker.Item label ="Select Class" value="" />      
               <Picker.Item label ="Economy" value="Economy" />
               <Picker.Item label ="PremiumEconomy" value="Pe" />
               <Picker.Item label ="Business" value="Business" />
               <Picker.Item label ="First Class" value="Fc" />
         </Picker>
    </View>



{/* Search button */}
      </View>
           </View>
                   <View style={styles.Searchbtn} >
                        <Button style={styles.Searchbtn} color="#f15b2F" title="Search" />
                    </View>
          <Separator />
         </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    },
    placeholder:{
      width:40,
      height:20,
      border:'none',
      // outline:'none',
    },
    Searchbtn:{
    marginLeft:70,
    marginRight:70,
    margin:10
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    }
});

export default FlightForm;