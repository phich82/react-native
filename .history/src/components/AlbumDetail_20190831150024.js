import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const AlbumDetail = (props) => {
	return (
		<View>
			<Text>{ props.album.title }</Text>
		</View>
	);
};

export default AlbumDetail;
