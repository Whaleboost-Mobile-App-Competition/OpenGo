import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput , Image} from 'react-native';
import { Feather, Entypo } from "@expo/vector-icons";

export default function Login() {
    return (
      <SafeAreaView style={styles.container}>
          
          <Image style={styles.img} source={require('../assets/images/OpenGo-logo.png')}/>
          <Text style={styles.topic}>Log In</Text>
            <View style={styles.inputcontainer}>
                {/* <Text style={styles.lable}>Email</Text> */}
                <TextInput 
                    style={styles.input} 
                    placeholder='Enter Your Email' 
                /> 
            </View>
            <View style={styles.inputcontainer}>
                {/* <Text style={styles.lable}>Password</Text> */}
                <TextInput 
                    secureTextEntry= {true}
                    style={styles.input} 
                    placeholder='Enter Your Password' 
                /> 
            </View>
            <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Reset')}>
              <Entypo name='help' size={20} color={'black'}/>
                  <Text style={{color:'blue'}}>Forgot your password ?</Text>
              </TouchableOpacity>
            
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
                  
                  <Text style={styles.btntext}>Sign In</Text>
              </TouchableOpacity>
                
              <Text style={styles.txt}>Don't You have an account</Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Registration')}>
                  
                  <Text style={styles.btntext}>Register Now</Text>
              </TouchableOpacity>
          
          
        
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      
    },
    topic:{
        fontSize:50,
        color:'blue',
        marginBottom:20,
        fontWeight:500
    },
    inputcontainer:{
        padding:10,
        marginBottom:5
    },
    lable:{
        fontSize:20
    },
    input:{
        backgroundColor:'#e0e0e0',
        padding: 5,
        paddingLeft:25,
        width:350,
        height:50,
        borderRadius:30,
        fontSize:25,
        color:'gray',
        borderColor:'blue',
        borderWidth:0.5
    },
    btn:{
        backgroundColor:'black',
        padding: 6,
        width:250,
        alignItems: 'center',
        marginTop:10,
        borderRadius:50
        

    },
    btntext:{
        color:'white',
        padding:5,
        fontSize:25,
        fontWeight:500
    },
    txt:{
        marginTop:20
    },
    img:{
        width:300,
        height:300,
    },
    link:{
        flexDirection:'row',
        marginTop:5,
        marginBottom:25
    }
  });