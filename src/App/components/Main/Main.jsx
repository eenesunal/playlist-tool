import React from 'react'

import Header from "../Header/Header"
import Result from "../Result/Result"

import { getJSON } from "../../../request"

export default class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            playlists: undefined,
            query: ""
        }
    }

    render() {
        const { playlists } = this.state

        return (
            <React.Fragment>
                <Header onSearch={this.onSearch} onEnter={this.onEnter} onAuth={this.onAuth} />
                <Result playlists={playlists} />
            </React.Fragment>
        )
    }

    onPlaylistSuccess = (resolve) => {
        this.setState({
            playlists: resolve.playlists.items,
        })
    }

    onSearch = (searchKey) => {
        this.setState({
            query: searchKey
        }, () => {
            if (!this.state.query || this.state.query === "") {
                alert("Enter a keyword to search")
                return
            }

            getJSON({
                url: "search",
                q: this.state.query,
                type: "playlist"
            }).then(this.onPlaylistSuccess)
                .catch((error) => {
                    console.error(error)
                })
        })
    }
}