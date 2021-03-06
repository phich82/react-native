import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

export default
class AlbumList extends Component {
    state = {
        albums: []
    };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map((album, index) => <AlbumDetail key={ index } album={ album }></AlbumDetail>);
    }

    render() {
        return (
            <ScrollView>
                { this.renderAlbums() }
            </ScrollView>
        )
    };
}
