import { combineReducers } from "redux";
import {searchFeature} from './searchFeatureReducer'
import {productListFeature} from './productListFeatureReducer'

const rootReducer = combineReducers(
    {
        searchFeature,
        productListFeature
    }
)

export default rootReducer;