import React,{useState} from 'react';
import { Text, View, StyleSheet, Button,StatusBar,TouchableOpacity,TextInput } from 'react-native';
import { primaryGradientArray } from '../components/utils/Colors';
import { lighterWhite } from '../components/utils/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Login(props) {
	const [Username, setUsername] = useState("");
	const [Password, setPassword] = useState("");
	const [Incorrect, setIncorrect] = useState(false);
  
  return (
    <LinearGradient colors={primaryGradientArray} style={styles.container}>
		<StatusBar barStyle="light-content" />
        <View style={styles.centered}>
			<Header title={"Login"} />
		</View>
		<TextInput
            // value={this.state.password}
            // onChangeText={(password) => this.setState({ password })}
            placeholder={'Username'}
            secureTextEntry={true}
            style={{...styles.input,}}
            underlineColorAndroid={lighterWhite}
             autoCapitalize="none"
               placeholderTextColor={lighterWhite}
          />
        
		<TextInput
            // value={this.state.password}
            // onChangeText={(password) => this.setState({ password })}
            placeholder={'Password'}
            secureTextEntry={true}
            style={{...styles.input,marginBottom:50}}
            underlineColorAndroid={lighterWhite}
             autoCapitalize="none"
               placeholderTextColor={lighterWhite}
          />
		
		  <Button color={primaryGradientArray[1]} title="Sign in!" onPress={signIn}/>
    </LinearGradient>
    
  )
  function signIn() {
	props.navigation.navigate('Home');
  }
  ;
}

Login.navigationOptions = {
  header: null,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
	alignItems: 'center',
	padding:50
  },
  centered: {
		alignItems: 'center',
		marginBottom:100,
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
  },
  input: {
	margin: 15,
	width: 200,
	height: 40,
	color: "rgba(255,255,255,.7)",
	fontSize: 13
 },
});

