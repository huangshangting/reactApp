import {fetchByMaterialActionType} from "../actionType/productListFeatureActionType"



const initialState = {

}

export const productListFeature=(state=initialState, action)=>{
    switch(action.type){
        case fetchByMaterialActionType:
            return {data:action.data}
        default : return state;
    }
}