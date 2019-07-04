import React from 'react'

import { Header, Playlists } from "../"
import ErrorBoundary from "../../../ErrorBoundary"

export default class SearchPlaylist extends React.Component {
    componentDidMount() {
        window.addEventListener("scroll", this.resizeHeaderOnScroll)
    }

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

    resizeHeaderOnScroll = () => {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 25,
            headerEl = document.getElementById("search-header"),
            exportButton = document.getElementById("export-to-youtube")

        if (distanceY > shrinkOn) {
            if (headerEl) headerEl.classList.add("shrinked-header")
            if (exportButton) exportButton.classList.add("shrinked-button")
        } else {
            if (headerEl) headerEl.classList.remove("shrinked-header")
            if (exportButton) exportButton.classList.remove("shrinked-button")
        }
    }
}