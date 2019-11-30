
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
import Header from '../components/Header';
import SubTitle from '../components/SubTitle';
import Input from '../components/Input';
import List from '../components/List';
import Button from '../components/Button';
export default class HomeScreen extends React.Component {
	state = {
		inputValue: '',
		loadingItems: false,
		allItems: {},
		isCompleted: false
	};
	render(){
		const { inputValue, loadingItems, allItems } = this.state;
		return (
		<LinearGradient colors={primaryGradientArray} style={styles.container}>
			<StatusBar barStyle="light-content" />
			<View style={styles.centered}>
					<Header title={'todo APP'} />
				</View>
				<View style={styles.inputContainer}>
					<SubTitle subtitle={"What's Next?"} />
					<Input
						// inputValue={inputValue}
						// onChangeText={this.newInputValue}
						// onDoneAddItem={this.onDoneAddItem}
					/>
				</View>
				{loadingItems ? (
						<ScrollView contentContainerStyle={styles.scrollableList}>
							{Object.values(allItems)
								.reverse()
								.map(item => (
									<List
										key={item.id}
										{...item}
										deleteItem={this.deleteItem}
										completeItem={this.completeItem}
										incompleteItem={this.incompleteItem}
									/>
								))}
						</ScrollView>
					) : (
						<ActivityIndicator size="large" color="white" />
				)}
		</LinearGradient>
	);
	}
}
HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	centered: {
		alignItems: 'center'
	},
	inputContainer: {
		marginTop: 40,
		paddingLeft: 15
	},
	list: {
		flex: 1,
		marginTop: 70,
		paddingLeft: 15,
		marginBottom: 10
	},
	scrollableList: {
		marginTop: 15
	},
	column: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	deleteAllButton: {
		marginRight: 40
	}
});




