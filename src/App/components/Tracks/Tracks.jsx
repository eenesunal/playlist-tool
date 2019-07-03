import React from 'react'
import { map } from "lodash"

import { getJSON } from "../../../request"
import { AlbumCover, Container, TrackList as List, TrackListItem as ListItem } from "./Tracks.styled"

export default class Tracks extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tracks: null
        }
    }

    componentDidMount() {
        const { playlistId } = this.props

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
}