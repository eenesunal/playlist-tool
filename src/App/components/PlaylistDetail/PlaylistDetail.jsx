import React from 'react'

import { Header, Tracks } from "../"
import ErrorBoundary from "../../../ErrorBoundary"

export default class PlaylistDetail extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <ErrorBoundary>
                    <Tracks playlistId={this.props.match.params.playlistId} />
                </ErrorBoundary>
            </React.Fragment>
        )
    }
}