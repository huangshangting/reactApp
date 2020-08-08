import React, { Component } from 'react';
import{BrowserRouter, Route, Switch} from "react-router-dom";
import SearchFeature from '../../containers/SearchFeature';
import ProductListFeature from "../../containers/ProductListFeature";
import HomeFeature from "../../containers/HomeFeature";

export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={HomeFeature} />
                        <Route path="/search" component={SearchFeature} />
                        <Route path="/category/:catId" component={ProductListFeature} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
