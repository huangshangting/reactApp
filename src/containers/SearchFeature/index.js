import React, { Component } from 'react';
import {connect} from 'react-redux';
import ProductLists from "../../compenents/ProductLists";
import SearchBox from "./compenents/SearchBox";
import {searchProduct} from "./../../redux/actions/searchFeatureAction"
import EmptyProduct from '../../compenents/EmptyProduct';
import TipsInfo from '../../compenents/TipsInfo';

class SearchFeature extends Component {
    
    constructor(){
        super();
        this.state={searchValue:""}
    }

    render() {
        const {searchClick, data, firstFlag} = this.props;
        return (
            <div>
                <SearchBox sChange={this.cChange} parentValue={this.state.searchValue} cleanClick={this.clearInput}
                sClick={()=>{searchClick(this.inputValue)}}/>
                {firstFlag ? <TipsInfo />:(data[0] ? <ProductLists products={data} />:<EmptyProduct />)}
            </div>
        )
    }

    cChange = (text) =>{
        this.inputValue = text;
        this.setState({searchValue:text})
    }

    clearInput=()=>{
        this.setState({searchValue:""});
    }

}


const mapStateToProps = (state, ownProps) => {
    return{
        data : state.searchFeature.data,
        firstFlag:state.searchFeature.firstFlag
    }

}

const mapDispatchToProps = dispatch =>{
    return{
        searchClick : (keyWord) => {searchProduct(dispatch,keyWord)}
    }
}

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(SearchFeature)