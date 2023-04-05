
import React from "react";
import { Pagination, Table } from "@mantine/core";
import { useState } from "react";

const elements = [
  {
    position: 1,
    name: "Toán",
    symbol: "4",
    mass: 1.0079,
  },
  {
    position: 2,
    name: "Lý",
    symbol: "4",
    mass: 4.0026,
  },
  {
    position: 3,
    name: "Hóa",
    symbol: "4",
    mass: 6.941,
  },
  {
    position: 4,
    name: "Tiếng Anh",
    symbol: "4",
    mass: 9.0122,
  },
];

export const Sumtable = () => {
  
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));

 

  return (
    <div
      style={{
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
        border: "1px #000",
        borderRadius: "15px",
        padding: "2vh",
      }}
    >
     
      <Table>
        <thead>
          <tr>
            <th>Sector</th>
            <th>Tháng</th>
            <th>Tổng tiền</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>

      {/* <br /> */}
      {/* <Pagination position="right" size="sm" total={5} /> */}
    </div>
  );
};
