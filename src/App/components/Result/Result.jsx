import React from 'react'
import { map } from "lodash"

import { Result as Container, List, ListItem, PlaylistCover as Image } from "./Result.styled"

export default class Result extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { playlists } = this.props

    return (
        <Container>
          {
            playlists && playlists.length < 1 ?
              <p>Playlist not found by your keyword.</p> :
              <List>
                {
                  playlists ?
                    map(playlists, (playlist, key) => {
                      return (
                        <ListItem
                          key={key}
                          onClick={this.onPlaylistSelect}
                        >
                          <Image src={playlist.images[0].url} />
                          {playlist.name} - <label>by {playlist.owner.display_name}</label>
                          <summary> - {playlist.tracks.total} songs</summary>
                        </ListItem>
                      )
                    }) :
                    <li>Enter the playlist name and search.</li>
                }
              </List>
          }
        </Container>
    )
  }

  onPlaylistSelect = () => {
    // youtube.post("/playlists", {
    //   params: {
    //     title: "highaf",
    //     description: "This playlist created by playlist-tool"
    //   }
    // })
    alert("selected playlist")
  }
}