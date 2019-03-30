/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Item extends Component {

  getItem(pid = 0) {
    return this.props.products.find(({ id }) => id === Number(pid)) || {};
  }

  render() {
    const { id } = this.props.match.params;
    if (isNaN(id)) return <Redirect to="/" />

    // 尋找資料
    const p = this.getItem(id);

    return (
      <div className="App">
        <div className="card mt-4">
          <img className="card-img-top img-fluid" src="http://placehold.it/900x400" alt="" />
          <div className="card-body">
            <h3 className="card-title">{p.username}</h3>
            <h4>{p.website}</h4>
            <p className="card-text">{p.email}</p>
            <span className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
            4.0 stars
          </div>
        </div>

        <div className="card card-outline-secondary my-4">
          <div className="card-header">
            Product Reviews
              </div>
          <div className="card-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
            <small className="text-muted">Posted by Anonymous on 3/1/17</small>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
            <small className="text-muted">Posted by Anonymous on 3/1/17</small>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
            <small className="text-muted">Posted by Anonymous on 3/1/17</small>
            <hr />
            <Link to="/" className="btn btn-success">Leave a Review</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
