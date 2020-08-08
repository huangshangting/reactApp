import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {homeCat} from "./homeCatsData"
import './style.css'

export default class HomeCats extends Component {
    render() {
        return (
            <div className="homeCats">
                <ul>
                {
                homeCat.cats.map((item, key)=>{
                    return(
                        <li key={key}><Link to={"/category/"+ item.homeCatValue}>{item.homeCatName}</Link></li>
                    )
                })
                }
                </ul>
            </div>
        )
    }
}
