import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { User } from '../interface/InterUser';
import { useEffect, useState } from 'react';
import { deleteUser, getAllUsers } from '../services/ApiService';
import { IconButton } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete"
import { toast } from 'react-toastify';




interface Column {
    id: 'firstName' | 'lastName' | 'email' | 'favoritesTitles';
    label: string;
    minWidth?: number;
    align?: 'center';
    format?: (value: any) => string;
  }
  
  const columns: readonly Column[] = [
  { id: 'firstName', label: 'First Name', minWidth: 100 },
  { id: 'lastName', label: 'Last Name', minWidth: 100 },
  { id: 'email', label: 'Email', minWidth: 100},
  { id: 'favoritesTitles', label: 'Favorites', minWidth: 100}
  ];
  
  interface Data {
    firstName: string;
    lastName: string;
    email: string;
    favoritesTitles: string;
}
  
  

function UsersManagment() {
    const [users, setUsers] = useState<Array<User>>([]);

    const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  async function onDeleteUser(_id: string) {
    try {
      
      await deleteUser(_id);
      console.log(`User ${_id} deleted successfully!`);
  
     

      
      setUsers((prevUsers) => prevUsers.filter((users) => users._id !== _id));
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Failed to delete user");
    }
  }

  useEffect(() => {
    getAllUsers().then((json) => {
      console.log(json);
      setUsers(json);  
    });
  }, []);

    return ( 
        
        <Paper sx={{ width: '100%', overflow: 'hidden',}}>
      <TableContainer sx={{ maxHeight: 1000}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          {users.length === 0 && <div>No Users</div>}
            
                
             
          {users.map((user) => (
          <TableRow hover role="checkbox" tabIndex={-1} key={user._id}>
             {columns.map((column) => {
                let value;
                if (column.id === 'favoritesTitles' && user.favorites) {
                    value = user.favorites.join(', ');
                } else {
                    value = user[column.id as keyof User];
                }
                return (
            <TableCell key={column.id} align={column.align}>
                 {column.format && typeof value === 'number'
            ? column.format(value)
            : value}
            </TableCell>

            
             );
              })}

           <IconButton
            aria-label="delete"
            color="primary"
            onClick={() => onDeleteUser(user._id as string)}
          
          >
            <DeleteIcon />
          </IconButton>
         </TableRow>
               ))}
             
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    
     );
}

export default UsersManagment;
