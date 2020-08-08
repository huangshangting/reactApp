import axios from 'axios';
import {searchType} from "../actionType/searchFeatureActionType";
import {hostIp} from "../api"

export const searchProduct = (dispatch, val) => {
    console.log(val);
    axios.get(hostIp + '/search/reactList',{
        params: {
            q: val
            }
        }).then(function (response) {
            response.data.forEach((item, index)=>{
                item.couponShareUrl="taobao:"+item.couponShareUrl
            })
            console.log(response);
            return(
                dispatch(searchAction(response.data))
            )
        }).catch(function (error) {
            console.log(error);
        });
}

const searchAction = (data)=>{
    return{
        type:searchType,
        data
    };
}