import React from 'react'
import { map } from "lodash"

import { getJSON } from "../../../request"

import { Result as Container, List, ListItem, PlaylistCover as Image } from "./Result.styled"

export default class Result extends React.Component {
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
                        name={playlist.id}
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

  onTracksSuccess = (response) => {
    console.log(response)
  }

  onPlaylistSelect = (e) => {
    let currentTarget

    if (e.target.nodeName !== "LI") {
      currentTarget = e.target.parentElement
    } else {
      currentTarget = e.target
    }

    let currentPlaylistId = currentTarget.attributes.name.value

    getJSON({
      url: `playlists/${currentPlaylistId}/tracks`,
    }).then(this.onTracksSuccess)
      .catch((error) => {
        console.error(error)
      })
  }
}