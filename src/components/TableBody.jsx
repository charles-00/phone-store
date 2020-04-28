import React, { Component } from "react";

class TableBody extends Component {
  render() {
    const { cart, removeItem, handleCount } = this.props.value;
    return (
      <tbody>
        {cart.map((c) => (
          <tr key={c.id}>
            <td>
              <img
                style={{ width: "80px" }}
                src={c.img}
                alt="cart-image"
                className="w-3 img-fluid"
              />
            </td>
            <td>{c.title}</td>
            <td>${c.price}</td>
            <td>
              <button
                onClick={() => handleCount(c.id, 0)}
                disabled={c.count > 1 ? false : true}
                className="btn btn-outline-secondary font-weight-bold"
              >
                -
              </button>
              <button
                disabled
                className="mx-2 text-dark btn btn-outline-secondary font-weight-bold"
              >
                {c.count}
              </button>
              <button
                onClick={() => handleCount(c.id, 1)}
                className="btn btn-outline-secondary font-weight-bold"
              >
                +
              </button>
            </td>
            <td>
              <i
                style={{ cursor: "pointer" }}
                className="text-warning"
                onClick={() => removeItem(c.id)}
                className="fa fa-remove fa-lg"
              ></i>
            </td>
            <td>${c.total}</td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
