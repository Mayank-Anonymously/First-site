import React,{useState} from 'react';
import {View, StyleSheet , Text  , ScrollView , TouchableOpacity ,Dimensions} from 'react-native';
import COLOR from  '../assets/consts/colors'  






const Counter = () => {
    const [count , setCount] = useState(0)

    const Increment =() => (
      setCount(prevCount => prevCount + 1 )
    )

    const Decrement =() => (
      setCount( prevcount => prevcount - 1 )
    )


    return (
        <View>
            <View>
                <View style = {styles.SignDiv}>
                  <View>
                    <TouchableOpacity onPress={Decrement}>
                    <Text style={styles.DecrementSign}>
                      -
                    </Text>
                  </TouchableOpacity>
                  </View>
                  <View>
                    <Text style= {{paddingLeft:10  ,fontSize:20}}>
                      {count}
                    </Text>
                  </View>
                  <View>
                    <TouchableOpacity onPress={Increment}>
                    <Text style = {styles.IncrementSign}>
                      +
                    </Text>
                 </TouchableOpacity>
                  </View>
               {/* <TouchableOpacity onPress={Increment}>
                  <Text style = {styles.IncrementSign}>+</Text>
                  </TouchableOpacity>
                </View>
                <View style= {{justifyContent:'center', alignItems:'center'}}>
                  <Text style = {{fontSize:20, marginLeft:4, width:24  }}>{count}</Text>
                </View>
                <View>
                <TouchableOpacity onPress={Decrement}>
                  <Text style = {styles.DecrementSign}>-</Text>
                  </TouchableOpacity> */}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    SignDiv:{
         flexDirection:'row',
         borderWidth:1,
         borderColor:COLOR.secondary,     
         alignItems:"center",
         height:30,
         width:80,
         marginLeft:5,
         borderRadius:10
    },
    IncrementSign:{
        fontSize:25,
        paddingLeft:12,
        color:COLOR.secondary
    },
    DecrementSign:{
        fontSize:25,
        paddingLeft:10,
        color:COLOR.secondary
      }
})

export default Counter;
