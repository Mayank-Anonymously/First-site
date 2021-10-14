import React,{useState} from 'react';
import { Text , View, Button , StyleSheet , TextInput, } from  'react-native'


const SupportContactForm = () => {
    const [Firstname, setFirstname] = useState('');
    const [Lastname, setLastname] = useState('');
    const [Phonename, setPhonename] = useState('');
    const [Emailname, setEmailname] = useState('');
    const [YourCommentname, setYourCommentname] = useState('');

    return(
        <View>
        <View>
            <View>
                          
                <View style ={{marginTop:40 , justifyContent:"center" , alignItems:"center" }}>
                <Text style ={{ fontSize:30, fontWeight:"bold" }}>
                    CONTACT FORM
                </Text>
                </View>
                <View style={{flexDirection:'column'}}>
                    <View><Text style={{marginLeft : 12,fontWeight:"bold"}}>First Name</Text></View>
                    <View><TextInput
                    onChangeText={setFirstname}
                     value={Firstname} 
                     style={styles.input}/></View>
                </View>

                <View style = {{marginTop : 20}}>
                <View style={{flexDirection:'column'}}>
                    <View><Text style={{marginLeft : 12,fontWeight:"bold" }}>Last Name</Text></View>
                    <View><TextInput
                    onChangeText={setLastname}
                     value={Lastname}
                     style={styles.input}/></View>
                </View>
                </View>

                <View style = {{marginTop : 20}}>
                <View style={{flexDirection:'column'}}>
                    <View><Text style={{marginLeft : 12,fontWeight:"bold" }}>Phone No.</Text></View>
                    <View><TextInput
                    onChangeText={setPhonename}
                     value={Phonename}
                      style={styles.input}/></View>
                </View>
                </View>

                <View style = {{marginTop : 20}}>
                <View style={{flexDirection:'column'}}>
                    <View><Text style={{marginLeft : 12,fontWeight:"bold" }}>E-Mail</Text></View>
                    <View><TextInput
                    onChangeText={setEmailname}
                    value={Emailname}
                    style={styles.input}/></View>
                </View>
                </View>

                <View style = {{marginTop : 20 , }}>
                <View style={{flexDirection:'column'}}>
                    <View><Text style={{marginLeft : 12,fontWeight:"bold" }}>Your Comment</Text></View>
                    <View><TextInput 
                    onChangeText={setYourCommentname}
                    value={YourCommentname} style={styles.textarea}/>
                    </View>
                </View>
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
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      textarea:{
          height:100,margin: 12,
          borderWidth: 1,
          padding: 10,
      }
})

export default SupportContactForm;