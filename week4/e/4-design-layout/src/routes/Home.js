import React, { Component } from 'react';

class Home extends Component {
  render() {

    // 確認有沒有收到 props
    console.log(this.props);

    return (
      <div>
        <h2>Home</h2>
        {/** 設計好資料版型 */}
        <table border="1" style={{ margin: '0 auto', width: '600px' }}>
          <thead>
            <tr>
              <th>編號</th>
              <th>品名</th>
              <th>價格</th>
              <th>圖片</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>珍珠奶茶</td>
              <td>45</td>
              <td><img src="https://i.imgur.com/DHxXogL.png" alt="珍珠奶茶" height="150" /></td>
            </tr>
            <tr>
              <td>2</td>
              <td>金桔檸檬</td>
              <td>55</td>
              <td><img src="https://i.imgur.com/mnhqKp7.png" alt="金桔檸檬" height="150" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Home;