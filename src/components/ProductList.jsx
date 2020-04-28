import React, { Component } from "react";
import Product from "./Product";
import { ProductConsumer } from "../Context";
import Title from "./Title";

class ProductList extends Component {
  render() {
    return (
      <div className="container">
        <Title name="our" title="products" />
        <div className="row mt-4">
          <ProductConsumer>
            {(value) => {
              return value.products.map((product) => (
                <Product key={product.id} product={product} />
              ));
            }}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}

export default ProductList;
