
import React from 'react';
import {
	StyleSheet,
	View,
	StatusBar,
	ActivityIndicator,
	ScrollView,
	AsyncStorage
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import uuid from 'uuid/v1';
import { primaryGradientArray } from '../components/utils/Colors';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <LinearGradient colors={primaryGradientArray} style={styles.container}>

    </LinearGradient>
  );
}
HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
	container: {
		flex: 1
  },
});




