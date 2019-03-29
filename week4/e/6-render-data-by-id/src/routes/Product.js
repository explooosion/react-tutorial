import React, { Component } from 'react';
import './Product.css';

import { Link, Redirect } from 'react-router-dom';

class Product extends Component {
  render() {

    // 確認有沒有收到 props
    // console.log(this.props);

    // 取得 ID 方式 - Ｏ級的方式
    // console.log(this.props.location.pathname.replace('/product/', ''))
    // 利用 route 設定參數 - 高級的方式
    const id = this.props.match.params.id;
    // console.log(id);
    // 注意：他是字串
    // console.log(typeof id);

    // 暫時用第一資料來顯示，幫助我們串接資料
    // const p = this.props.products[0];
    const p = this.props.products.find(p => p.id === Number(id));

    // 都沒找到就回首頁
    if (p === undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="product">
        <h2>Product</h2>
        <div className="group">
          <div className="group-picture">
            <img src={p.picture} alt={p.name} height="400" />
          </div>
          <div className="group-detail">
            <div>品名：{p.name}</div>
            <div>價格：{p.price}</div>
            <div className="group-goback"><Link to="/">回首頁</Link></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Product;