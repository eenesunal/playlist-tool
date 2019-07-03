import React from 'react'

import Header from "../Header/Header"
import Playlists from "../Playlists/Playlists"

export default class SearchPlaylist extends React.Component {

    render() {

        return (
            <React.Fragment>
                <Header />
                <Playlists query={this.props.match.params.query} />
            </React.Fragment>
        )
    }
}