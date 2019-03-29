import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.history = props.history;
  }

  renderProducts(p = {}) {
    return (
      <tr
        key={`product-${p.id}`}
        onClick={() => this.history.push(`./product/${p.id}`)}
      >
        <td>{p.id}</td>
        <td>{p.name}</td>
        <td>{p.price}</td>
        <td><img src={p.picture} alt={p.name} height="150" /></td>
      </tr>
    );
  }

  render() {

    // 確認有沒有收到 props
    // console.log(this.props);

    return (
      <div>
        <h2>Home</h2>
        {/** 設計好資料版型 */}
        <table className="products" border="1" style={{ margin: '0 auto', width: '600px' }}>
          <thead>
            <tr>
              <th>編號</th>
              <th>品名</th>
              <th>價格</th>
              <th>圖片</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(p => this.renderProducts(p))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Home;