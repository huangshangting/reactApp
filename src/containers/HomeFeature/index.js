import React, { Component } from 'react'
import HomeCats from "./components/HomeCats";
import SearchFeature from "../SearchFeature"

export default class HomeFeature extends Component {
    render() {
        return (
            <div>
                <HomeCats />
                <SearchFeature />
            </div>
        )
    }
}
