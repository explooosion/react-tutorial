/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { Link } from "react-router-dom"

class Home extends Component {
  renderProducts(p) {
    return (
      <div key={`product-${p.id}`} className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <Link to={{ pathname: `/product/${p.id}`, state: { product: p } }}><img className="card-img-top" src={p.picture} alt="" /></Link>
          <div className="card-body">
            <h4 className="card-title">
              <Link to={`/product${p.id}`}>{p.name}</Link>
            </h4>
            <h5>${p.price}</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="Home">
        <div className="container">

          <div className="row">

            <div className="col-lg-3">

              <h1 className="my-4">Shop Name</h1>
              <div className="list-group">
                <a href="#" className="list-group-item">Category 1</a>
                <a href="#" className="list-group-item">Category 2</a>
                <a href="#" className="list-group-item">Category 3</a>
              </div>

            </div>

            <div className="col-lg-9">

              <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img className="d-block img-fluid" src="http://placehold.it/900x400" alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block img-fluid" src="http://placehold.it/900x400" alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block img-fluid" src="http://placehold.it/900x400" alt="Third slide" />
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
                {this.props.products.map(p => this.renderProducts(p))}
              </div>

            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default Home;
