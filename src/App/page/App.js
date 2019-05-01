import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { map } from "lodash"

import { getJSON } from "../../request"

import { Container, Header, List, ListItem, PlaylistCover as Image, Search, SearchButton as Button } from "./App.styled"

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playlists: undefined,
      query: ""
    }
  }

  render() {
    const { playlists } = this.state;
    return (
      <Router>
        <Container>
          <Header>
            <Search
              type="text"
              placeholder="Search playlist.."
              onChange={this.onKeywordChange}
              onKeyPress={this.onEnter}
            />
            <Button
              onClick={this.onSearch}
            >
              Search
        </Button>
          </Header>
          <List>
            {
              playlists ?
                map(playlists, (playlist, key) => {
                  return (
                    <ListItem
                      key={key}
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
        </Container>
      </Router>
    )
  }

  onPlaylistSuccess = (resolve) => {
    this.setState({
      playlists: resolve.playlists.items,
    })
  }

  onSearch = () => {
    if (!this.state.query || this.state.query === "") {
      alert("Enter a keyword to search")
      return
    }

    getJSON({
      url: "search",
      q: this.state.query,
      type: "playlist"
    }).then(this.onPlaylistSuccess)
  }

  onKeywordChange = (e) => {
    this.setState({
      query: e.target.value
    })
  }

  onEnter = (e) => {
    if (e.charCode === 13) {
      this.onSearch()
    }
  }
}