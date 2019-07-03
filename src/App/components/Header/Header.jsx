import React from 'react'
import { Redirect } from "react-router-dom"

import { Header as Container, HeaderRow, Search, SearchButton as Button } from "./Header.styled"

export default class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            query: "",
            search: false
        }
    }

    render() {
        const { query, search } = this.state

        return (
            search ?
                <Redirect push to={`/search/${query}`} /> :
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
                </Container>
        )
    }

    onSearch = () => {
        this.setState({ search: true })
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
}