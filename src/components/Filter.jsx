import React, { useState } from "react";
import { Sumtable } from "./SumTable";

const list = [
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
const Filter = ({ data }) => {
  const [ageFilter, setAgeFilter] = useState("");
  const [filteredData, setFilteredData] = useState(data ?? list);

  const handleAgeFilterChange = (e) => {
    const value = e.target.value;
    setAgeFilter(value);
    const filtered = data.filter((item) => {
      if (item.itemName.toLowerCase().includes(value.toLowerCase())) {
        return item;
      }
    });
    setFilteredData(filtered);
  };

  return (
    <div>
      {/* <input
        className=""
        type="text"
        value={ageFilter}
        onChange={(e) => handleAgeFilterChange(e)}
        placeholder="Enter age"
      /> */}
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.itemName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
