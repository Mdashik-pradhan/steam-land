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
  // hide last product
  '&:last-child td, &:last-child th': {
    product: 0,
  },
}));



const ProductsTable = ({products, handleDelete}) => {
    console.log(products)
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left" sx={{fontSize: '18px'}}>Product Name</StyledTableCell>
            <StyledTableCell align="left" sx={{fontSize: '18px'}}>Price</StyledTableCell>
            <StyledTableCell align="left" sx={{fontSize: '18px'}}>Delete</StyledTableCell>
            <StyledTableCell align="left" sx={{fontSize: '18px'}}>Edit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <StyledTableRow key={product._id}>
              <StyledTableCell align="left">{product?.title}</StyledTableCell>
              <StyledTableCell align="left">{product?.price}</StyledTableCell>
              <StyledTableCell align="left"><DeleteForeverIcon onClick={() =>handleDelete(product._id)} style={{backgroundColor: 'red', color: 'white', borderRadius: '2px'}} /> </StyledTableCell>
              <StyledTableCell align="left"><EditIcon /> </StyledTableCell>

              <StyledTableCell align="left">
                
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProductsTable;
