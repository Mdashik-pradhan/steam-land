import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



const MyOrdersTable = ({orders, handleDelete}) => {
    console.log(orders)
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left" sx={{fontSize: '18px'}}>Email</StyledTableCell>
            <StyledTableCell align="left" sx={{fontSize: '18px'}}>Orders Name</StyledTableCell>
            <StyledTableCell align="left" sx={{fontSize: '18px'}}>Price</StyledTableCell>
            <StyledTableCell align="left" sx={{fontSize: '18px'}}>Status</StyledTableCell>
            <StyledTableCell align="left" sx={{fontSize: '18px'}}>Cancel</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <StyledTableRow key={order._id}>
              <StyledTableCell align="left">{order?.email}</StyledTableCell>
              <StyledTableCell align="left">{order?.product.title}</StyledTableCell>
              <StyledTableCell align="left">BTD {order?.product.price}</StyledTableCell>
              <StyledTableCell align="left"><button className="brand-background-color-3 text-light border-none rounded">{order?.orderStatus}</button> </StyledTableCell>
              <StyledTableCell align="left"><button onClick={() =>handleDelete(order._id)} style={{backgroundColor: 'red', color: 'white', borderRadius: '2px'}}>Cancel</button> </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MyOrdersTable;
