import React from 'react'
import { map } from "lodash"

import { getJSON } from "../../../request"

import { AlbumCover, Container, Header, TrackList as List, TrackListItem as ListItem, ExportButton } from "./Tracks.styled"

export default class Tracks extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tracks: null,
            gapi: window.gapi
        }
    }

    componentDidMount() {
        const { playlistId } = this.props
        const { gapi } = this.state

        getJSON({
            url: `playlists/${playlistId}/tracks`,
        }).then(this.onTracksSuccess)
            .catch((error) => {
                console.error(error)
            })
    }

    render() {
        const { tracks } = this.state

        return (
            <Container>
                <Header>
                    <ExportButton
                        onClick={this.onExportClick}
                        id='export-to-youtube'
                    >
                        Export to YouTube
                    </ExportButton>
                </Header>
                <List>
                    {
                        map(tracks, (trackInfo, key) => {
                            return (
                                <ListItem key={key}>
                                    <sub>{key + 1}</sub>
                                    <AlbumCover src={trackInfo.track.album.images[0].url} />
                                    {trackInfo.track.name} - <label>by {trackInfo.track.album.artists[0].name}'s &nbsp;	</label>
                                    <summary> {trackInfo.track.album.name} album</summary>
                                </ListItem>
                            )
                        })
                    }
                </List>
            </Container>
        )
    }

    onTracksSuccess = (resolve) => {
        this.setState({
            tracks: resolve.items
        })
    }

    onExportClick = () => {
        const { gapi } = this.state

        function start() {
            // 2. Initialize the JavaScript client library.
            gapi.client.init({
                'apiKey': 'AIzaSyDmYKr5-BshBdiuaXWBDuWbiajL3Mvo2W4',
                // clientId and scope are optional if auth is not required.
                'clientId': '378257028232-rls4rbep8eq1jn1pnp6ue5sqnrrqapq6.apps.googleusercontent.com',
                'scope': 'profile',
            }).then(function () {
                // 3. Initialize and make the API request.
                return gapi.client.request({
                    'path': 'https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names',
                })
            }).then(function (response) {
                console.log(response.result);
            }, function (reason) {
                console.log('Error: ' + reason.result.error.message);
            });
        };

        // 1. Load the JavaScript client library.
        gapi.load('client', start);
    }
}