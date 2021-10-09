import React, {useState} from 'react' 
import { View ,Text , Image, CheckBox , FlatList } from 'react-native'


const data = [
    {
        id:1, flightName:"Go air", time:"9:30AM-12:30PM" ,price:"₹8927.00", 
        id:1, flightName:"Air india", Time:"9:05PM-11:30AM" ,price:"₹9000.00",
        id:1, flightName:"Indigo", Time:"10:20PM-10:15PM" ,Price:"₹4554.00",
        id:1, flightName:"Vistara", Time:"1:30PM-4:30PM" ,Price:"₹9538.00",
        id:1, flightName:"Virgin", Time:"12:30PM-5:30PM" ,Price:"₹9334.00"
    }
]

const item = ({ id, flightName, time, price }) => (
   <View>
       <Text>{id}
       </Text>
      <Text>
         {time}
      </Text>
      <Text>{price}</Text>
      <Text>{flightName}</Text>
  </View>   
)



const Cards = () =>{
    const [isSelected , setSelection] = useState(false);
    return(
        <View>
           
            <View style = {{ borderRadius:4 , shadowColor:"grey",shadowOpacity:1.0,shadowRadius:5,flexDirection:"row",justifyContent:"space-evenly" , margin:10 }}>
                    <View>
                    <Image  
                    source ={require('../assets/G8.png')}
                    style ={{resizeMode:'contain', width:35 ,height:35}}
                    />
                    </View>
                    <View >
                        <Text>
                            
                        </Text>
                        <Text>
                        "9:30AM-12:30PM"
                        </Text>
                    </View>
                    <View>
                        <Text>5h 50m</Text>
                        <Text>(One-Stop)</Text>
                        <Text>MAA-DEL</Text>
                        <Text>G8-302/327</Text>
                    </View>
                    <View>
                        <Text>Form₹</Text>
                        <Text>7566.00</Text>
                    </View>
                              <View style ={{marginLeft:5, flexDirection:"row-reverse",flex:1, justifyContent:"flex-end" ,alignItems:"flex-end" }} >
                                 <Text>{isSelected?'selected' : 'select'}</Text>
                                    <CheckBox
                                        size = {20}
                                        value={isSelected }
                                        onValueChange={setSelection}
                                        />
                           </View>
          </View>
          <FlatList
                data={data}
                renderItem={({item})=>  <Cards item={item} />}
                keytractor={(item) =>{item.id}}
                />
        </View>
    )
}

export default Cards;