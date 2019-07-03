import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import SearchPlaylist from "../components/SearchPlaylist/SearchPlaylist"
import PlaylistDetail from "../components/PlaylistDetail/PlaylistDetail"
import Header from "../components/Header/Header"
import Auth from "../components/Auth/Auth"
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