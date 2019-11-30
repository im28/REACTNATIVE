import React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet, Button,StatusBar } from 'react-native';
import * as Permissions from 'expo-permissions';
import { primaryGradientArray } from '../components/utils/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Header from '../components/Header';


export default function LinksScreen() {
  const [hasCameraPermission, sethasCameraPermission] = useState(null)
  const [scanned, setscanned] = useState(false)
  useEffect(() => {
    getPermissionsAsync();
  }, [])

    
  async function getPermissionsAsync (){
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    sethasCameraPermission(  status === 'granted' );
  };
  handleBarCodeScanned = ({ type, data }) => {
    setscanned( true );
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
  return (
    <LinearGradient colors={primaryGradientArray} style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.centered}>
				  <Header title={"Scanner"} />
			  </View>
        {hasCameraPermission&&
          <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
          />
        }

        {scanned && (
          <Button title={'Tap to Scan Again'} onPress={() => setscanned(false)} />
        )}
      </LinearGradient>
  );
}

LinksScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
		alignItems: 'center'
	},
});
