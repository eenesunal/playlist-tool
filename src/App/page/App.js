import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import { SearchPlaylist, PlaylistDetail, Header, Auth } from "../components"
import Callback from "../../Callback"

import { Container } from "./App.styled"

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Container>
          <Route exact path="/" component={Auth} />
          <Route exact path="/callback" component={Callback} />
          <Route exact path="/search" component={Header} />
          <Route exact path="/search/:query" component={SearchPlaylist} />
          <Route exact path="/search/:query/:playlistId" component={PlaylistDetail} />
        </Container>
      </Router>
    )
  }
}