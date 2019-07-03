import React from 'react'

import { Header as Container, HeaderRow, Search, SearchButton as Button } from "./Header.styled"

export default class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            query: "",
        }
    }

    render() {
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
}