import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, ActivityIndicator } from 'react-native';

export default function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.img} source={require('../assets/images/OpenGo-logo.png')}/>
      <Text style={styles.topic}>Welcome</Text>
      <ActivityIndicator style={styles.activityIndicator} size={'large'} color={'red'}></ActivityIndicator>

      {/* Footer area */}
      <View style={styles.footer}>
        <Image style={styles.teamLogo} source={require('../assets/images/Team-logo.jpg')} />
        <Text style={styles.footerText}>Designed by Team Whaleboost</Text>
      </View>
      

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
    },

    teamLogo:{
        width:50,
        height:50,
        borderRadius: 10,
        marginRight:5,
    },
    
    topic:{
        fontSize:50,
        color:'blue',
        fontWeight:500
    },

    activityIndicator:{
        marginTop: 20,
    },

    footer:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        position:'absolute',
        bottom:15,
        right:'auto',
        left:'auto',

    },

    footerText:{
        fontSize:18,
        fontWeight:500,
        marginLeft:5,
    },
});
