import React,{useState,useRef} from 'react';
import { View, Text,FlatList,Animated,StyleSheet } from 'react-native';
import SlidersData from '../SlidersData';
import {FontAwesome5} from 'react-native-vector-icons';
import Paginator from './Paginator';
import CarasoulItem from './CarasoulItem';
// import Animated from 'react-native-reanimated';

const Carasoul = () => {
    const [Current, setCurrent] = useState(0);
    const slideRef= useRef(null)
    const scrollX = useRef(new Animated.Value(0)).current;
    const viewableItemchanged = useRef(({viewableItem})=>{
        setCurrent(viewableItem[0].index)
    }).current;


    const viewConfig = useRef(({viewAreaCovragePercentThreshold:50})).current;
    return (
        <View>
        <View style={styles.shadow}>
            <View>
                <View  style={{marginVertical:10}}>
                    <Text style={{fontSize:20,fontWeight: 'bold', marginLeft:10}}>TOP DESTINATION IN INDIA</Text>
                </View>
                <View style={{flexDirection:"row"}}> 
                    <View style={{marginLeft:10}}>
                        <FontAwesome5 name="hotel" size={35} color="#F15b2F"/>
                    </View>
                    <View style={{marginLeft:10}}>
                    <View style={{
                        width: '102px',
                        height: '2px',
                        backgroundColor: '#c0c0c0',
                        margin: '5px',
                        display: 'block',
                    }}></View>
                    <View style={{
                        width: '160px',
                        height: '2px',
                        backgroundColor: '#c0c0c0',
                        margin: '5px',
                        display: 'block',
                    }}></View>
                    <View style={{
                        width: '132px',
                        height: '3px',
                        backgroundColor: '#c0c0c0',
                        margin: '5px',
                        display: 'block',
                    }}></View>
                    </View>
                </View>
            </View>
                      
    <View>
     <View>
     <FlatList
      data={SlidersData} 
      renderItem={({item})=>  <CarasoulItem item={item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      bounces={false}
      keyExtractor={(item)=> item.id}
      onScroll={Animated.event([{nativeEvent:{contentOffset:{x : scrollX}}}],{  useNativeDriver:false})}
      scrollEventThrottle={32}
      onViewableItemsChanged={viewableItemchanged}
      viewabilityConfig={viewConfig}
      ref={slideRef}
      />  
     </View>
</View>
                
        </View>
        <View style={{marginTop:30}}>
        <Paginator data={SlidersData} scrollX={scrollX}/>
        </View>
    </View>
    )
}


const styles = StyleSheet.create({
    shadow:{
        shadowinset:{
            width:0.5,
            height:6,
        },
        shadowColor:"#222",
        shadowOpacity:.1,
        shadowRadius:8,
        height:250,
        // backgroundColor: '#000',
        marginHorizontal:12,
        backgroundColor:'#f5f5f5',height:400
        }
})

export default Carasoul;
