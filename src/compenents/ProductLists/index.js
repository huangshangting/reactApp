import React, { Component } from 'react';
import './style.css';

export default class ProductLists extends Component {
    render() {
        const productLists = this.props.products
        return (
            <div className="productList">
                <ul>
                {productLists.map((item, index)=>{
                    return(
                    <li key={index}>
                        <div className="product_img">
                            <img src= {item.pictUrl} alt="图片" />
                        </div>
                        <div className="product_text">
                            <p className="product_name"> {item.shopTitle}</p>
                            <p className="product_shop_name">{item.title}</p>
                            <p className="product_amout">优惠券金额{item.couponAmount}元</p>
                            <a className="product_discount_url" href={item.couponShareUrl}>优惠券地址</a>
                        </div>
                    </li>
                    )
                })}
                </ul>
            </div>
        )
    }
}
