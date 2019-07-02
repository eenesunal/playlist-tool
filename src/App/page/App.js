import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import Main from "../components/Main/Main"

import { Container } from "./App.styled"

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Container>
          <Route exact path="/" component={Main} />
          <Route exact path="/callback" component={Main} />
        </Container>
      </Router>
    )
  }
}