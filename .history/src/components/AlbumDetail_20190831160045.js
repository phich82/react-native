import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

const styles = {
	item: {
		image: {
			width: 50,
			height: 50
		},
		header: {
			flexDirection: 'column',
			justifyContent: 'space-around'
		}
	}
};

const AlbumDetail = (props) => {
	let album = props.album;

	return (
		<Card>
			<CardItem>
				<View>
					<Image style={styles.item.image} source={ {uri: album.thumnail_image} } />
				</View>
				<View style={ styles.item.header }>
					<Text>{ album.title }</Text>
					<Text>{ album.artist }</Text>
				</View>
			</CardItem>
		</Card>
	);
};

export default AlbumDetail;
