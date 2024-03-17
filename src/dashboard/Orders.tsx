import React, { useEffect, useReducer } from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import axios from 'axios'
import Cookies from "js-cookie";

/*
// Generate Order Data
function createData(
  id: number,
  date: string,
  name: string,
  shipTo: string,
  paymentMethod: string,
  amount: number,
) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '01 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'TOSS ⠀•••• 5919',
    22.79,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    2,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(
    3,
    '16 Mar, 2019',
    'Tom Scholz',
    'Boston, MA',
    'MC ⠀•••• 1253',
    100.81,
  ),
  createData(
    4,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    5,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  )
];
*/

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Orders() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null
  });

  const fetchUsers = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const response = await axios.get('http://127.0.0.1:3500',
        {
          headers: {
            token: Cookies.get("id")
          }
        }
      );
      //console.log(Cookies.get("id"))
      //console.log(response)
      if (response?.status == 200) {
        if (response.data != 'No token' && response.data != 'Expired token' && response.data != 'Invalid token' && response.data != 'Undefined token') {
          dispatch({ type: 'SUCCESS', data: response.data });
        }
        else{
          console.log(response.data)
          dispatch({ type: 'ERROR', error: "token error" });
        }
      }
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const { loading, data: users, error } = state; // state.data 를 users 

  if (loading) return <div>로딩중..</div>;
  if (error){
    if(error == "token error"){
      return <div>로그인 해주세요</div>;
    }
    return <div>알 수 없는 에러가 발생했습니다</div>;
  }
  if (!users) return null;
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>UserName</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user:
            {
              email: any;
              id: React.Key | null | undefined;
              username: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
              name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
            }) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell align="right">{`$${user.email}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={() => { fetchUsers(); }} sx={{ mt: 3 }}>
        Reload
      </Link>
    </React.Fragment>
  );
}
