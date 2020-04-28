import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import styled from "styled-components";
import { Link } from "react-router-dom";

class Modal extends Component {
  state = {};
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) return null;
          return (
            <ModalWrapper>
              <div className="row">
                <div
                  id="modal"
                  className="col-8 text-center text-capitalize mx-auto p-5"
                >
                  <h5>item added to the cart</h5>
                  <img src={img} alt="product" className="img-fluid" />
                  <h5>{title}</h5>
                  <h5 className="text-muted">price : $ {price}</h5>
                  <Link to="/">
                    <button
                      onClick={() => closeModal()}
                      className="btn btn-outline-success text-capitalize mr-1"
                    >
                      continue shopping
                    </button>
                  </Link>
                  <Link to="/cart">
                    <button
                      onClick={() => closeModal()}
                      className="btn btn-outline-warning text-capitalize"
                    >
                      go to cart
                    </button>
                  </Link>
                </div>
              </div>
            </ModalWrapper>
          );
        }}
      </ProductConsumer>
    );
  }
}

const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: #f3f3f3;
  }
`;

export default Modal;
