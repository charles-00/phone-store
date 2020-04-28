import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";

class Details extends Component {
  state = {};
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            title,
            img,
            price,
            company,
            info,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container my-5">
              <h2 className="text-center">{title}</h2>
              <div className="row mt-5">
                <div className="col-10 col-md-6 m-auto">
                  <img src={img} alt="image" className="img-fluid" />
                </div>
                <div className="col-10 col-md-6 mx-auto">
                  <h2>model : {title}</h2>
                  <h4
                    className="text-uppercase text-muted mt-3 mb-2"
                    style={{ fontFamily: "Permanent Marker" }}
                  >
                    made by : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-warning">
                    <strong>
                      price : <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt3 mb-0">
                    some info about product :
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <div>
                    <Link to="/">
                      <button className="text-capitalize btn btn-outline-success">
                        back to produtcs
                      </button>
                    </Link>
                    <button
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                      disabled={inCart}
                      className="ml-2 text-capitalize btn btn-outline-warning"
                    >
                      {inCart ? "in cart" : "add to cart"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
