// import React, { useState } from "react";
// import { Sumtable } from "./SumTable";

// const list = [
//   { id: 1, name: "John", age: 25 },
//   { id: 2, name: "Jame", age: 20 },
//   { id: 3, name: "Mark", age: 30 },
// ];
// const Filter = () => {
//   const [ageFilter, setAgeFilter] = useState("");
//   const [filteredData, setFilteredData] = useState(list);

//   const handleAgeFilterChange = (e) => {
//     const value = e.target.value;
//     setAgeFilter(value);
//     const filtered = list.filter((item) => {
//       if (item.name.toLowerCase().includes(value.toLowerCase())) {
//         return item;
//       }
//     });
//     setFilteredData(filtered);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={ageFilter}
//         onChange={(e) => handleAgeFilterChange(e)}
//         placeholder="Enter age"
//       />
//       <ul>
//         {filteredData.map((item) => (
//           <li key={item.id}>
//             {item.name} ({item.age})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Filter;
