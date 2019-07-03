import React from 'react'

import { Header, Playlists } from "../"
import ErrorBoundary from "../../../ErrorBoundary"

export default class SearchPlaylist extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <ErrorBoundary>
                    <Playlists query={this.props.match.params.query} />
                </ErrorBoundary>
            </React.Fragment>
        )
    }
}