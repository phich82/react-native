import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

const styles = {
	item: {
		image: {
			container: {
				justifyContent: 'center',
				alignItems: 'center',
				marginLeft: 10,
				marginRight: 10
			},
			content: {
				width: 50,
				height: 50
			}
		},
		header: {
			content: {
				flexDirection: 'column',
				justifyContent: 'space-around'
			}
			contentTitle: {
				fontSize: 20
			}
		}
	}
};

const AlbumDetail = (props) => {
	let album = props.album;

	return (
		<Card>
			<CardItem>
				<View style={ styles.item.image.container }>
					<Image style={ styles.item.image.content } source={ {uri: album.thumbnail_image} } />
				</View>
				<View style={ styles.item.header.content }>
					<Text>{ album.title }</Text>
					<Text>{ album.artist }</Text>
				</View>
			</CardItem>
		</Card>
	);
};

export default AlbumDetail;
