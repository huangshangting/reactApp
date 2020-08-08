import React, { Component } from 'react'
import "./style.css"

export default class ProductCats extends Component {
    render() {
        const catLists = this.props.cats;
        return (
            <div className="catLists">
                <ul>
                {catLists.map((item, index)=>{
                    return(
                        <li key={index} onClick={this.catClick.bind(this,item.catValue)}>
                            {item.catName}
                        </li>
                    )
                })}
                </ul>
            </div>
        )
    }

    catClick=value=>{
        return this.props.pClick(value);
    }
}
