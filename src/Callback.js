import React from "react"

export default class Callback extends React.Component {
    componentDidMount() {
        const TOKEN = window.location.hash.substr(1).split('&')[0].split("=")[1]
        localStorage.setItem('ACCESS_TOKEN', TOKEN);
    }

    render() {
        return (
            <React.Fragment />
        )
    }
}