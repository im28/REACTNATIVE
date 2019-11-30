import React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet, Button,ScrollView } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';


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
  if (hasCameraPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        {scanned && (
          <Button title={'Tap to Scan Again'} onPress={() => setscanned(false)} />
        )}
      </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
