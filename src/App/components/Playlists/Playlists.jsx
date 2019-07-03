import React from 'react'
import { map } from "lodash"
import { Redirect } from "react-router-dom"

import { getJSON } from "../../../request"

import { Result as Container, List, ListItem, PlaylistCover as Image } from "./Playlists.styled"

export default class Playlists extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playlists: null,
      playlistSelected: false,
      playlistId: null
    }
  }

  componentDidMount() {
    const { query } = this.props

    getJSON({
      url: "search",
      q: query,
      type: "playlist"
    }).then(this.onPlaylistSuccess)
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    const { playlists, playlistId, playlistSelected } = this.state
    const { query } = this.props

    return (
      playlistSelected ?
        <Redirect push to={`/search/${query}/${playlistId}`} /> :
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

  onPlaylistSelect = (e) => {
    let currentTarget

    if (e.target.nodeName !== "LI") {
      currentTarget = e.target.parentElement
    } else {
      currentTarget = e.target
    }

    let playlistId = currentTarget.attributes.name.value
    this.setState({ playlistSelected: true, playlistId })
  }

  onPlaylistSuccess = (resolve) => {
    this.setState({
      playlists: resolve.playlists.items,
    })
  }
}