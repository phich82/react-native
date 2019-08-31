import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

const styles = {
	item: {
		header: {
			flexDirection: 'column',
			justifyContent: 'space-around'
		}
	}
};

const AlbumDetail = (props) => {
	return (
		<Card>
			<CardItem>
				<View></View>
				<View style={ styles.item.header }>
					<Text>{ props.album.title }</Text>
					<Text>{ props.album.artist }</Text>
				</View>
			</CardItem>
		</Card>
	);
};

export default AlbumDetail;
