import React from 'react';
import { Text, View, StyleSheet, Button,StatusBar,TouchableOpacity } from 'react-native';
import { primaryGradientArray } from '../components/utils/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function SettingsScreen() {
  
  return (
    <LinearGradient colors={primaryGradientArray} style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.centered}>
				  <Header title={"profile"} />
			  </View>
        <View style={styles.profile}>
          <FontAwesome5 name={"user-alt"} style={{color:"white",fontSize:100,textAlign:"center", marginTop: 100}}></FontAwesome5>
          <Text style={{color:"white",fontSize:36,fontFamily:"space-mono"}}>USER</Text>
        </View>
        <View style={{    marginTop:"auto",marginBottom:100,textAlign:"center",alignItems: 'center',}}>
          <TouchableOpacity style={styles.logout}onPress={()=>{}}>
            <FontAwesome5 name={"sign-out-alt"} style={{color:"white",fontSize:40,textAlign:"center"}}></FontAwesome5>
          </TouchableOpacity>
          <Text style={{color:"white",fontSize:16}}>logout</Text>
        </View>

      </LinearGradient>
    
  )
  ;
}

SettingsScreen.navigationOptions = {
  header: null,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  centered: {
		alignItems: 'center'
  },
  profile:{
    textAlign:"center",
    alignItems: 'center',
  },
  logout:{
    height:70,
    width:70,
    borderRadius:500,
    textAlign:"center",
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor:primaryGradientArray[0],

  }
});

