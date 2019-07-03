import React from "react"

import { Redirect } from "react-router-dom"

export default class Callback extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isTokenReceived: false
        }
    }

    componentDidMount() {
        const TOKEN = window.location.hash.substr(1).split('&')[0].split("=")[1]
        localStorage.setItem('ACCESS_TOKEN', TOKEN)

        if (TOKEN) this.setState({ isTokenReceived: true })
    }

    render() {
        const { isTokenReceived } = this.state

        return (
            isTokenReceived ?
                <Redirect to="/search" /> :
                <React.Fragment />
        )
    }
}