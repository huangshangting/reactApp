import {fetchByMaterialActionType} from "../actionType/productListFeatureActionType";
import axios from "axios";
import {hostIp} from "../api"

export const fetchByMaterialId =(dispatch, materialId)=>{
    console.log(materialId)
    axios.get(hostIp + "/fetch/materialDb",{
        params:{
            pageNo:1,
            pageSize:20,
            materialId:materialId
        }
    }).then(function(response){
        console.log(response);
        response.data.list.forEach((item, index)=>{
                item.couponShareUrl="taobao:"+item.couponShareUrl
        })
        console.log(response);
        return(
            dispatch(fetchByMaterialAction(response.data.list))
        )
    }).catch(function (error) {
        console.log(error);
    });
    
}

const fetchByMaterialAction = (data)=>{
    return{
        type:fetchByMaterialActionType,
        data
    }
}