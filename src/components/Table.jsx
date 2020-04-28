import React from "react";
import TableBody from "./TableBody";

const Table = ({ value }) => {
  return (
    <div className="container-fluid">
      <table className="table text-center">
        <thead className="text-uppercase">
          <tr>
            <th>products</th>
            <th>name</th>
            <th>price</th>
            <th>quantity</th>
            <th>remove</th>
            <th>total</th>
          </tr>
        </thead>
        <TableBody value={value} />
      </table>
    </div>
  );
};

export default Table;
