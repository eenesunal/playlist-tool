import React from 'react'
import { getJSON } from "../../request"

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playlists: []
    }
  }

  componentDidMount() {
    getJSON({
      url: "search",
      q: "highaf",
      type: "playlist"
    }).then(this.onPlaylistSuccess)
  }

  onPlaylistSuccess = (resolve) => {
    console.log(resolve);
    // this.setState({
    //     playlists: resolve.data.results,
    // })
  }

  render() {
    return(
      <div>:)</div>
    )
  }
}