// import { Table } from '@mantine/core';

// function SumTable() {
//   const rows = elements.map((element) => (
//     <tr key={element.name}>
//       <td>{element.position}</td>
//       <td>{element.name}</td>
//       <td>{element.symbol}</td>
//       <td>{element.mass}</td>
//     </tr>
//   ));

//   return (
//     <Table>
//       <thead>
//         <tr>
//           <th>Element position</th>
//           <th>Element name</th>
//           <th>Symbol</th>
//           <th>Atomic mass</th>
//         </tr>
//       </thead>
//       <tbody>{rows}</tbody>
//     </Table>
//   );
// }
// import React from 'react'
// import { Pagination, Table } from '@mantine/core'

// const elements = [
//   {
//     Date: 1,
//     Sum : "100.000.000",
   
//   },
//    {
//     Date: 1,
//     Sum : "100.000.000",
    
//   },
//    {
//     Date: 1,
//     Sum : "100.000.000",
   
//   },
//    {
//     Date: 1,
//     Sum : "100.000.000",
    
//   },
//    {
//     Date: 1,
//     Sum : "100.000.000",
   
//   },
// ]

//   const SumTable = () => {
//   const rows = elements.map((element) = (
//     <tr key={elements.Date}>
//       <td>{elements.Date}</td>
//       <td>{elements.Sum}</td>
      
      
//     </tr>
//   ))
//   return (
//     <div>
//       <div>
//         <Table>
//           <thead>
//             <tr>
//               <th>Date</th>
//               <th>Sum</th>
              
//             </tr>
//           </thead>
//           <tbody>{rows}</tbody>
//         </Table>

//       <br />
//       <Pagination position="right" size="sm" total={5}/>
//       </div>
//     </div>
//   )
// }
// export default SumTable;


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
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));

 
  // const [list, setList] = useState(elements);
  // const filterBymass = (mass) => {
  //   const filteredList = list.filter(item => item.mass === mass);
  //   setList(filteredList);
  // };

  // const [massFilter, setMassFilter] = useState('');

  // const handleMassFilterChange = (event) => {
  //   setMassFilter(event.target.value);
  //   filterBymass(event.target.value);
  // };



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
      {/* <div>
        <input className="border-2 w-64" placeholder="Enter number Search month" type="text" value={massFilter} onChange={handleMassFilterChange}/>
        <ul>
          {list.map(item => (
            <li >({item.mass})</li>
          ))}
        </ul>
      </div> */}
      <Table>
        <thead>
          <tr>
            <th>Số thứ tự</th>
            <th>Môn học</th>
            <th>số tháng</th>
            <th>Tổng tiền</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>

      <br />
      <Pagination position="right" size="sm" total={5}/>
    </div>
  );
};
