import React from 'react'
import { getJSON } from "../../request"
import { map } from "lodash"

import { Container, Header, List, ListItem, Search, SearchButton as Button } from "./App.styled"

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
      <Container>
        <Header>
          <Search
            type="text"
            placeholder="Search playlist.."
            onChange={this.onKeywordChange}
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
            return(
              <ListItem key={key}>{playlist.name} - by {playlist.owner.display_name}</ListItem>
            )
          }) :
          <ListItem>Enter the playlist name and search.</ListItem>
        }
        </List>
      </Container>
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
}