import React from 'react';
import { Text , View, Button , StyleSheet , TextInput } from  'react-native'
import { Input } from 'react-native-elements/dist/Input';







const ContactForm = () => {
    return(
        <View>
        <View>
            <View>              
                <View style ={{marginTop:40 , justifyContent:"center" , alignItems:"center" }}>
                <Text style ={{ fontSize:30, fontWeight:"bold" }}>
                    CONTACT FORM
                </Text>
                </View>

                <View style = {{marginTop : 20}}>
                <Text style ={{ fontWeight:"bold" }}>
                    First Name*
                    <Input
                    type="text" />
                </Text>
                </View>

                <View style = {{marginTop : 20}}>
                <Text style ={{ fontWeight:"bold" }}>
                    last Name*
                    <Input
                    type="text"
                    />
                </Text>
                </View>

                <View style = {{marginTop : 20}}>
                <Text style ={{ fontWeight:"bold" }}>
                    Email*
                    <Input
                    type="text"
                    />
                </Text>
                </View>

                <View style = {{marginTop : 20}}>
                <Text style ={{ fontWeight:"bold" }}>
                    Contact.No*
                    <Input
                    type ="numeric"
                    />
                </Text>
                </View>

                <View style = {{marginTop : 20 , }}>
                <Text style ={{ fontWeight:"bold"  }}>
                    Your Comment
                    <Input
                    size={20}
                    />
                </Text>
                </View>
            </View>
            <View style = {{marginRight:'60%' , marginLeft: '5%'   }}>
                <View style = {{ 
                    width:100,
                    height:40,
                    borderWidth : 1,
}}>
                    <Text style = {{fontSize:20}}>
                      TAB7^@P
                    </Text>

                </View>
          
               <View style= {{marginTop:8}}>
                <TextInput
                    style={styles.input}
                  />
                  </View>
          
          
            </View>
        </View>
        <View  style ={{alignItems:"Right" ,  marginLeft:'60%' , marginRight:10}}>
        <Button title = "Submit" color="#f15b2F"  />
        </View>
        
        
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width:'80%',
        height: 5,
        margin: 1,
        borderWidth: 1,
        padding: 10,
      },
})

export default ContactForm;