import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AlbumDetail extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>AlbumDetail Component</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});
