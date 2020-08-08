import React, { Component } from 'react'
import ProductCats from "./components/ProductCats"
import {connect} from 'react-redux';
import {fetchByMaterialId} from "../../redux/actions/productListFeatureAction"
import ProductLists from "../../compenents/ProductLists"
import {getCats} from "./catData" 

class ProductListFeature extends Component {
  
    componentWillMount(){
        const {fetchProduct} = this.props
        const catId = this.props.match.params.catId;
        fetchProduct(getCats(catId)[0].catValue);
    }

    render() {
        const {fetchProduct, data} = this.props
        const catId = this.props.match.params.catId;
        return (
            <div>
                <ProductCats cats={getCats(catId)} pClick={(materialId)=>fetchProduct(materialId)} />     
                {data ? <ProductLists products={data} />:''}
            </div>
        )
    }

    catClick = value =>{
        alert(value);
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data : state.productListFeature.data
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchProduct : (materialId) => {fetchByMaterialId(dispatch, materialId)}
    }
}

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(ProductListFeature)