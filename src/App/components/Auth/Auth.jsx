import React from 'react'

import { Container, Button, Overlay } from "./Auth.styled"

export default class Auth extends React.Component {
    render() {
        return (
            <Container>
                <Button onClick={this.onAuth}>
                    Connect with Spotify
                </Button>
                <Overlay />
            </Container>
        )
    }

    onAuth = () => {
        const CLIENT_ID = "c125236939b44700935cd3d7b45e5084",
            REDIRECT_URI = "http://localhost:3000/callback",
            SCOPES = "user-read-private user-read-email playlist-modify-private playlist-modify-public playlist-read-private"

        window.location.href = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&show_dialog=true`
    }
}