import React, {useState} from 'react';
import { View ,Text , StyleSheet , TextInput , CheckBox , Button ,Image } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import  { Input } from 'react-native-elements/dist/Input'

import { TouchableOpacity } from 'react-native-gesture-handler';
import * as yup from 'yup'
import { Formik } from 'formik'




const GoogleIcon ={ uri:"https://image.similarpng.com/thumbnail/2020/12/Flat-design-Google-logo-design-Vector-PNG.png"}




const SignIn = ({navigation}) => {




const [isSelected , setSelection] = useState(false);

    

    return (

        <Formik
        initialValues = {{
            email:'',
            password:''
        }}
        onSubmit={values=>Alert.alert(JSON.stringify(values))}
        validationSchema={yup.object().shape({
            email:yup
            .string()
            .email()
            .required(),
           password:yup
            .string()
            .min(4)
            .max(10, 'Password should not excced 10 chars.')
            .required(),
        })}
        > 
         {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
        <View>
            <View style  ={{flex:1, flexDirection:'row'  }}>
               <View style = {styles.Icon}>
                   <View style = {styles.IconDiv}>
                  <FontAwesome5 
                  name="user"
                  color="white"
                  size ={40} />
                  </View>
                
                  <View style ={{marginTop:20}}>
                      <Text style={{fontSize:20 , fontWeight:"bold" , fontFamily:"Helvetica"}}>
                         Sign In
                      </Text>
                  </View>

                  <View style = {{marginTop:50 , marginRight:10 }}>
                          <View>
                              
                          <Input 
                            
                            value={values.email}
                            onChangeText={handleChange('email')}
                            onBlur={()=> setFieldTouched('email')}
                            style={{height:40}}
                            placeholder="email"
                            placeholderTextColor="grey"
                            leftIcon={
                                <FontAwesome5  
                                size = {20}
                                name="envelope"
                                color="grey" 
                                
                                />
                            }
                            />
                      </View>
                 
                      {touched.email && errors.email && <Text style = {{fontSize:12 , color:'red'}}>{errors.email}</Text>}
                 
                  </View>


                  <View style = {{marginTop:20 , marginRight:10 }}>
                      <View>
                         <Input 
                             value={values.password}
                             onChangeText={handleChange('password')}
                             onBlur={() => setFieldTouched('password')}
                             style = {{height:40 }}
                             placeholder="password"
                             placeholderTextColor="grey"
                             secureTextEntry
                             leftIcon={
                                <FontAwesome5  
                                size = {20}
                                name="unlock-alt"
                                color="grey" 
                                />
                            }
                          />
                      </View>
        {touched.password &&  errors.password && <Text style ={{fontsize:12 , color:"red"}}>{errors.password}</Text>}
                      <View style={{flexDirection:"row" ,marginTop:20}}> 
                              <View style ={{marginLeft:10}} >
                                    <CheckBox
                                        size = {20}
                                        value={isSelected}
                                        onValueChange={setSelection}
                                     />
                                </View>
                                <View style = {{justifyContent:"space-between" ,flexDirection:"row"}}>
                                <View>
                                     <Text style = {{fontFamily:"Helvetica" , fontWeight:"bold" , marginLeft:5}}>Remember Me</Text>
                                </View>     
                  
                           <TouchableOpacity>
                                <View>
                                    <Text style = {{fontFamily:"italic" , color:"blue" , marginLeft:20 }}>
                                          Forgot Password?
                                   </Text>
                             </View>
                             </TouchableOpacity>
                             </View>
                      </View>
                  </View>
                  <View style = {{marginTop:20 , width:'50%'}}>
                      <Button 
                      onPress = {() => navigation.navigate('HomeStackScreen')}
                      title = "Login In"
                      color  = "#f15b2F"
                      disabled={!isValid}
                      onSubmit={handleSubmit}
                      />
                  </View>

                    <View>
                        <TouchableOpacity>
                        <Text style= {{color:"#f15b2F"}}>
                            Didn't have an account? Create One.
                        </Text>
                        </TouchableOpacity>
                    </View>

                  <View>
                    <TouchableOpacity>
                  <View style = {{marginTop :10 , flexDirection:"row" ,  backgroundColor:"grey"}}>
    
    
                  <View style = {{color:"grey"}}>
                      <Image  source = {GoogleIcon} style = {{resizeMode: 'contain' ,  width : 40   , height: 40}} />
                  </View>
                      <View >
                      <Text style ={{fontStyle :"arial" , fontweight:'bold', fontSize:20 , color:"white" ,margin:8 ,textAlign:"center"}}>
                          Sign In with Google
                      </Text>
                      </View>              
                  </View>
                  </TouchableOpacity>

                  </View>
               </View>  
          </View>    
        </View>
         )}
        </Formik>
    )
}



const styles = StyleSheet.create({
    Icon:{
        flex: 3,
        height:500,
        backgroundColor:"whitesmoke" , 
        flexDirection:"column" , 
        margin: 30, 
        justifyContent:'center',
        alignItems:"center",
        border:" 2px solid white"
    },
    IconDiv:{
        marginTop:10,
        border:"6px solid tan",
        backgroundColor:"#f15b2F",
        height:80,
        width:80,
        borderRadius:"100%",
        alignItems:"center",
        justifyContent:"center"
    },
})
export default SignIn;