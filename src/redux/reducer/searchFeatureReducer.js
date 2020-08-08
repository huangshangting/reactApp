import {searchType} from "../actionType/searchFeatureActionType"


const initialState = {
    firstFlag:true
    // data:[{
    //     srcUrl : "wf",
    //     productName : "产品名",
    //     productShop:"店铺名",
    //     discountUrl:""
    // }]
}

export const searchFeature = (state = initialState, action) => {
    switch(action.type) {
        case searchType:
        return {data:action.data, firstFlag:false}
        default : return state;
    }
}