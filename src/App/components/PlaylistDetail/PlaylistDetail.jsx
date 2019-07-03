import React from 'react'

import Header from "../Header/Header"
import Tracks from "../Tracks/Tracks"

export default class PlaylistDetail extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Tracks playlistId={this.props.match.params.playlistId} />
            </React.Fragment>
        )
    }
}