import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput , Image} from 'react-native';
import { Feather, Entypo } from "@expo/vector-icons";

export default function Registration() {
    return (
      <SafeAreaView style={styles.container}>
          
          <Text style={styles.topic}>Register</Text>
            <View style={styles.inputcontainer}>
                {/* <Text style={styles.lable}>Name</Text> */}
                <TextInput 
                    style={styles.input} 
                    placeholder='Enter Your Name' 
                /> 
            </View>
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
            <View style={styles.inputcontainer}>
                {/* <Text style={styles.lable}>Confirm Password</Text> */}
                <TextInput 
                    secureTextEntry= {true}
                    style={styles.input} 
                    placeholder='Confirm Your Password' 
                /> 
            </View>
            
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
                  
                <Text style={styles.btntext}>Register</Text>
            </TouchableOpacity>
              
                
            <Text style={styles.txt}>Already have an account</Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
                  
                <Text style={styles.btntext}>Login Now</Text>
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
        marginBottom:5,
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
        marginTop:20,
    },
    
    link:{
        flexDirection:'row',
        marginTop:30
    },
  });