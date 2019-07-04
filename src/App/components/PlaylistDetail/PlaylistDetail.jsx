import React from 'react'

import { Header, Tracks } from "../"
import ErrorBoundary from "../../../ErrorBoundary"

export default class PlaylistDetail extends React.Component {
    componentDidMount() {
        window.addEventListener("scroll", this.resizeHeaderOnScroll)
    }

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

    resizeHeaderOnScroll = () => {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 25,
            headerEl = document.getElementById("search-header"),
            exportButton = document.getElementById("export-to-youtube")

        if (distanceY > shrinkOn) {
            headerEl.classList.add("shrinked-header")
            exportButton.classList.add("shrinked-button")
        } else {
            headerEl.classList.remove("shrinked-header")
            exportButton.classList.remove("shrinked-button")
        }
    }
}