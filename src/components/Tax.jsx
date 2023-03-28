// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

// const TAX_RATE = 0.07;

// function ccyFormat(num) {
//   return `${num.toFixed(2)}`;
// }

// function priceRow(qty, unit) {
//   return qty * unit;
// }

// function createRow(desc, qty, unit) {
//   const price = priceRow(qty, unit);
//   return { desc, qty, unit, price };
// }

// function subtotal(items) {
//   return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
// }

// const rows = [
//   createRow("Fixed (costs)", 100, 1.15),
//   createRow("Monthly (costs)", 10, 45.99),
//   createRow("Variable (costs)", 2, 17.99),
// ];

// const invoiceSubtotal = subtotal(rows);
// const invoiceTaxes = TAX_RATE * invoiceSubtotal;
// const invoiceTotal = invoiceTaxes + invoiceSubtotal;

// export default function SpanningTable() {
//   return (
//     <TableContainer
//       component={Paper}
//       style={{
//         border: "1px #000",
//         borderRadius: "15px",
//       }}
//     >
//       <Table sx={{ minWidth: 700 }} aria-label="spanning table">
//         <TableHead>
//           <TableRow>
//             <TableCell align="center" colSpan={3}>
//               Expense
//             </TableCell>
//             <TableCell align="right">Transform</TableCell>
//           </TableRow>
//           <TableRow>
//             <TableCell>Desc</TableCell>
//             <TableCell align="right">Salary</TableCell>
//             <TableCell align="right">Unit (VND)</TableCell>
//             <TableCell align="right">Sum</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.desc}>
//               <TableCell>{row.desc}</TableCell>
//               <TableCell align="right">{row.qty}</TableCell>
//               <TableCell align="right">{row.unit}</TableCell>
//               <TableCell align="right">{ccyFormat(row.price)}</TableCell>
//             </TableRow>
//           ))}

//           <TableRow>
//             <TableCell rowSpan={3} />
//             <TableCell colSpan={2}>Subtotal</TableCell>
//             <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
//           </TableRow>
//           <TableRow>
//             <TableCell>Incurred</TableCell>
//             <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
//               0
//             )} %`}</TableCell>
//             <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
//           </TableRow>
//           <TableRow>
//             <TableCell colSpan={2}>Total</TableCell>
//             <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
import React from 'react';

const Tax = () => {
  return (
    <div className='bg-white w-80 h-96'>
      <div className='flex pt-6 font-serif　text-gray-300 fo text-2xl items-center justify-center'>subtotal</div>
      <div className='flex justify-center text-4xl text-lime-500 pt-3 border-lime-200 '>600.000.000</div>
    </div>
  )
}

export default Tax
