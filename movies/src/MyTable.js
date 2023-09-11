
// import React from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
// import { Link } from 'react-router-dom';
// import img from './dwonload.svg';

// const  MyTable = () => {
//     const rows = [
//         { id: 1, name: 'Radiation Therapy', size: "23 GB" ,img:img },
//         { id: 2, name: 'Scan & images', size:"112 GB" },
//         { id: 3, name: 'Clinical Trial', size:"45 GB" },
//         { id: 4, name: 'Research', size:"77 GB " },
//       ];

//       return (
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Dataset type</TableCell>
//                 <TableCell>size</TableCell>
//                 <TableCell>Download Dataset</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rows.map(row => (
//                 <TableRow key={row.id}>
//                    <TableCell> <Link>{row.name}</Link></TableCell>
//                   <TableCell>{row.size}</TableCell>
//                   <TableCell>{row.img}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       );
// }

// export default MyTable;


