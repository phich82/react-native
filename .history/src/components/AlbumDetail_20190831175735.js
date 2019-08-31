import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

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
			},
			contentTitle: {
				fontSize: 20
			}
		},
		body: {
			height: 300,
			flex: 1,
			width: null
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
					<Text style={ styles.item.header.contentTitle }>{ album.title }</Text>
					<Text>{ album.artist }</Text>
				</View>
			</CardItem>
			<CardItem>
				<Image style={ styles.item.body } source={ {uri: album.image} } />
			</CardItem>
			<CardItem>
				<Button></Button>
			</CardItem>
		</Card>
	);
};

export default AlbumDetail;
