import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function End() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.topic}>End</Text>

      <View style={styles.subView}>
        <Text style={styles.subtitle}>You have arrived at the</Text>
        <View style={styles.row}>
            <Text style={styles.subtitle}>destination </Text>
            <FontAwesome5 name="smile" size={22} color="black" />
        </View>
        
      </View>
      <Image style={styles.img} source={require('../assets/images/OpenGo-logo.png')}/>

      <Text style={styles.subtitle}>Find another place</Text>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Dashboard')}>
        <Text style={styles.btntext}>Next</Text>
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

    img:{
        width:300,
        height:300,
        marginBottom:20,
    },
    
    topic:{
        fontSize:50,
        color:'blue',
        fontWeight:500,
        marginBottom:60,
    },

    subtitle:{
        fontSize:25,
    },

    subView:{
        marginBottom:30,
        alignItems: 'center',
        justifyContent: 'center',
    },

    row:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    btn:{
        backgroundColor:'black',
        padding: 6,
        width:250,
        alignItems: 'center',
        marginTop:10,
        borderRadius:50,
        marginTop:20,
    },

    btntext:{
        color:'white',
        padding:5,
        fontSize:25,
        fontWeight:500,
    },

});
