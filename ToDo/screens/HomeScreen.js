
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
// import Header from '../components/Header';
// import SubTitle from '../components/SubTitle';
// import Input from '../components/Input';
// import List from '../components/List';
// import Button from '../components/Button';

export default function HomeScreen() {
  return (
    <LinearGradient colors={primaryGradientArray} style={styles.container}>
        <StatusBar barStyle="light-content" />
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




