import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import Main from "../components/Main/Main"
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
          <Route exact path="/search" component={Main} />
        </Container>
      </Router>
    )
  }
}