import React from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";
import NativeSelect from "@mui/material/NativeSelect";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import axios from 'axios'
import Cookies from "js-cookie";
import { URL } from '../constants/CONSTANTS';
import { useEffect, useReducer } from "react";

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



const columns = [
  { 
    field: 'id',
    headerName: 'ID',
    width: 50
  },
  {
    field: 'address',
    headerName: '주소',
    width: 120,
    editable: true,
  },
  {
    field: 'area',
    headerName: '면적',
    width: 120,
    editable: true,
  },
  {
    field: 'status',
    headerName: '작업상태1',
    width:130,
    editable: true,
  },
  {
    field: 'etc',
    headerName: '작업상태2(비고)',
    width: 120,
    editable: true,
  },
  {
    field: 'memo',
    headerName: '관리자메모',
    width: 120,
    editable: true,
  },
  {
    field: '참여자메모',
    headerName: '참여자메모',
    width: 120,
    editable: true,
  },
  {
    field: 'AccountId',
    headerName: '관리자ID',
    width: 120,
    editable: true,
  },
  {
    field: 'TeamId',
    headerName: '참여자ID(팀ID)',
    width: 150,
    editable: true,
  },
  {
    field: 'TGName',
    headerName: 'TG제목',
    width: 150,
    editable: true,
  },
  {
    field: 'TaskName',
    headerName: 'Task제목',
    width: 150,
    editable: true,
  },
  {
    field: 'createdAt',
    headerName: '생성일',
    width: 150,
    editable: true,
  },
];

export default function () {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null
  });

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const response = await axios.get(URL,
        {
          headers: {
            token: Cookies.get("id"),
            request_type: "taskdetail"
          }
        }
      );
      //console.log(Cookies.get("id"))
      console.log(response)
      if (response?.status == 200) {
        if (response.data != 'No token' && response.data != 'Expired token' && response.data != 'Invalid token' && response.data != 'Undefined token') {
          dispatch({ type: 'SUCCESS', data: response.data });
        }
        else {
          console.log(response.data)
          dispatch({ type: 'ERROR', error: "token error" });
        }
      }
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { loading, data: data, error } = state; // state.data 를 data 

  if (loading) return <div>로딩중..</div>;
  if (error) {
    if (error == "token error") {
      return <div>로그인 해주세요</div>;
    }
    return <div>알 수 없는 에러가 발생했습니다</div>;
  }
  if (!data) return <div>TD 정보 없음.</div>;
  return (
    <Box sx={{ height: '95%', width: '100%' }}>
      <div style={{ margin: 10 }}>
      <div className="App">TaskDetail 페이지입니다.</div>
    </div>
      
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={12}
        rowsPerPageOptions={[12]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}





