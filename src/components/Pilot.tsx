import React, { useEffect, useReducer } from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'
import Cookies from "js-cookie";
import { URL } from '../constants/CONSTANTS';

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

const columns= [
  {
    field: 'id',
    headerName: 'ID',
    width: 100
  },
  {
    field: 'name',
    headerName: '이름',
    width: 110,
    editable: true,
  },
  {
    field: 'phone',
    headerName: '전화번호',
    width: 130,
    editable: true,
  },
  {
    field: 'area',
    headerName: '활동지역',
    width: 120,
    editable: true,
  },
  {
    field: '희망지역',
    headerName: '희망지역',
    width: 120,
    editable: true,
  },
  {
    field: 'region',
    headerName: '영업거점',
    width: 120,
    editable: true,
  },
  {
    field: 'drone',
    headerName: '보유드론',
    width: 120,
    editable: true,
  },
  {
    field: 'career',
    headerName: '경력',
    width: 90,
    editable: true,
  },
  {
    field: 'createdAt',
    headerName: '가입일',
    width: 120,
    editable: true,
  },
  {
    field: '마지막접속일',
    headerName: '마지막 접속일',
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
            request_type: "pilot"
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
          //console.log(response.data);
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
  if (!data) return <div>유저 정보 없음.</div>;
  return (
    <Box sx={{ height: '95%', width: '100%' }}>
      <div style={{ margin: 10 }}>
        <div className="App">조종사 페이지입니다.</div>
      </div>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={12}
        loading={loading}
        rowsPerPageOptions={[12]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}