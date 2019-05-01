import React from 'react'
import { getJSON } from "../../request"

import { Container, Header, Search, SearchButton as Button } from "./App.styled"

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playlists: [],
      query: ""
    }
  }

  render() {
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
      </Container>
    )
  }

  onPlaylistSuccess = (resolve) => {
    this.setState({
      playlists: resolve.items,
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