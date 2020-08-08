import React, { Component } from 'react';
import "./style.css";

export default class SearchBox extends Component {
    render() {
        return (
            <div className="search_content">
                <div className="search">
                    <div className="search_box">
                        <input type="text" className="search_searchText" onChange={this.boxChange} value={this.props.parentValue}
                        placeholder="请输入您要搜索的商品、类目或链接"/>
                    </div>
                    <input type="button" value="搜索" className="search_searchConfirm" onClick={this.props.sClick}/>
                    <input type="button" value="清空" className="search_clear" onClick={this.props.cleanClick}/>
                </div>
            </div>
        )
    }

    boxChange = e =>{
        this.props.sChange(e.target.value);
    }



}