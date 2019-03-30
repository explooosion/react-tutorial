/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Home extends Component {

  renderProduct(p, index) {
    return (
      <div key={'product-' + index} className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <Link to={`/item/${p.id}`}><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></Link>
          <div className="card-body">
            <h4 className="card-title">
              <Link to={`/item/${p.id}`}>{p.username}</Link>
            </h4>
            <h5>{p.website}</h5>
            <p className="card-text">{p.email}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div >
    )
  }

  render() {
    return (
      <div className="App">

        <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div className="row">
          {this.props.products.map((p, index) => this.renderProduct(p, index))}
        </div>
      </div>
    );
  }
}

export default Home;
