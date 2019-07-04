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
            headerEl = document.getElementById("search-header")

        if (distanceY > shrinkOn) {
            headerEl.classList.add("shrinked-header")
        } else {
            headerEl.classList.remove("shrinked-header")
        }
    }
}