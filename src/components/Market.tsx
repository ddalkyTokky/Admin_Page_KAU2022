import React from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";
import NativeSelect from "@mui/material/NativeSelect";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
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
    field: '담당업체',
    headerName: '담당업체',
    width:105,
    editable: true,
  },
  {
    field: '사업지주소',
    headerName: '사업지주소',
    width: 105,
    editable: true,
  },
  {
    field: '사업자형태',
    headerName: '사업자형태',
    width: 105,
    editable: true,
  },
  {
    field: '사업자등록번호',
    headerName: '사업자등록번호',
    width: 120,
    editable: true,
  },
  {
    field: '약품판매신고서',
    headerName: '약품판매신고서',
    width: 120,
    editable: true,
  },
  {
    field: '사업장연락처',
    headerName: '사업장연락처',
    width: 120,
    editable: true,
  },
  {
    field: '사업장이메일',
    headerName: '사업장이메일',
    width: 120,
    editable: true,
  },
  {
    field: '담당자이름',
    headerName: '담당자이름',
    width: 90,
    editable: true,
  },
  {
    field: '담당자연락처',
    headerName: '담당자연락처',
    width: 110,
    editable: true,
  },
  {
    field: '담장자이메일',
    headerName: '담당자이메일',
    width: 130,
    editable: true,
  },
  {
    field: '가입일',
    headerName: '가입일',
    width: 90,
    editable: true,
  },
  {
    field: '마지막접속일',
    headerName: '마지막접속일',
    width: 90,
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
            request_type: "market"
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
  if (!data) return <div>유저 정보 없음.</div>;
  return (
    <Box sx={{ height: '80vh', width: '100%' }}>
      <div style={{ margin: 10 }}>
      <div className="App">대리점 페이지입니다.</div> 
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {" "}
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <NativeSelect
            defaultValue={"none"}
            inputProps={{
              name: "category",
              id: "uncontrolled-native",
            }}
          >
            <option value={"none"}>통합검색</option>
            <option value={"담당업체"}>담당업체</option>
            <option value={"사업지주소"}>사업지주소</option>
            <option value={"사업자등록번호"}>사업자등록번호</option>
          </NativeSelect>
        </FormControl>
        <TextField id="standard-search" type="search" variant="standard" />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
          <Button variant="outlined" startIcon={<DeleteIcon />} >비활성화</Button>
        </IconButton>
      </Box>
    </div>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}



