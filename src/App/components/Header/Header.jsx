import React from 'react'

import { getter } from "../../../requestParams"

import { Header as Container, HeaderRow, Search, SearchButton as Button } from "./Header.styled"

export default class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            query: "",
        }
    }

    render() {
        const isAuth = localStorage.getItem('ACCESS_TOKEN')

        return (
            <Container>
                <HeaderRow>
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
                </HeaderRow>
                {
                    !isAuth ?
                        <HeaderRow>
                            <Button mini
                                onClick={this.onAuth}
                            >
                                Connect with Spotify
                            </Button>
                        </HeaderRow> :
                        <React.Fragment />
                }
            </Container>
        )
    }

    onSearch = () => {
        this.props.onSearch(this.state.query)
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

    onAuth = () => {
        this.props.onAuth()
    }
}