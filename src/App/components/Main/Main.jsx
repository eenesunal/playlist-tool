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

    componentDidMount() {
        const TOKEN = window.location.hash.substr(1).split('&')[0].split("=")[1]
        localStorage.setItem('ACCESS_TOKEN', TOKEN);

        if (TOKEN) {
            getJSON({
                url: "search",
                q: this.state.query,
                type: "playlist"
            }).then(this.onPlaylistSuccess).catch((error) => { console.error(error) })
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
        })

        getJSON({
            url: "search",
            q: this.state.query,
            type: "playlist"
        }).then(this.onPlaylistSuccess)
            .catch((error) => {
                console.error(error);
            })
    }

    onAuth = () => {
        const CLIENT_ID = "c125236939b44700935cd3d7b45e5084",
            REDIRECT_URI = "http://localhost:3000/callback",
            SCOPES = "user-read-private user-read-email playlist-modify-private playlist-modify-public playlist-read-private"

        window.location.href = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&show_dialog=true`
    }
}