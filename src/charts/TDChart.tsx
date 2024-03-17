import React, { PureComponent, useEffect, useReducer } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';


import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Grid } from '@mui/material';
import NativeSelect from "@mui/material/NativeSelect";
import FormControl from "@mui/material/FormControl";
import { grid } from '@mui/system';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import axios from 'axios'
import Cookies from "js-cookie";
import { URL } from '../constants/CONSTANTS';

// export default function CheckboxLabels() {
// return (
//   <FormGroup>
//     <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
//     <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
//   </FormGroup>
// );
// }

/*
const data = [
    { 날짜: '22.09.03', Task수: 10},
    { 날짜: '22.09.09', Task수: 15 },
    { 날짜: '22.09.15', Task수: 27 },
    { 날짜: '22.09.21', Task수: 20 },
    { 날짜: '22.09.27', Task수: 12 },
    { 날짜: '22.10.01', Task수: 23},
    { 날짜: '22.10.07', Task수: 47},
    { 날짜: '22.10.10', Task수: 21 },
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
                        request_type: "taskchart",
                        ready: String(readyChecked),
                        done: String(doneChecked),
                        not_found: String(not_foundChecked),
                        deleted: String(deletedChecked),
                        ing: String(ingChecked)
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

    const { loading, data: data, error } = state; // state.data 를 data 

    const [doneChecked, setDoneChecked] = React.useState(false);
    const [readyChecked, setReadyChecked] = React.useState(false);
    const [not_foundChecked, setNot_foundedChecked] = React.useState(false);
    const [deletedChecked, setDeletedChecked] = React.useState(false);
    const [ingChecked, setIngChecked] = React.useState(false);

    const doneHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDoneChecked(event.target.checked);
    };
    const readyHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setReadyChecked(event.target.checked);
    };
    const not_foundHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNot_foundedChecked(event.target.checked);
    };
    const deletedHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDeletedChecked(event.target.checked);
    };
    const ingHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIngChecked(event.target.checked);
    };

    useEffect(() => {
        fetchData();
    }, [doneChecked, readyChecked, not_foundChecked, deletedChecked, ingChecked]);

    if (loading) return <div>로딩중..</div>;
    if (error) {
        if (error == "token error") {
            return <div>로그인 해주세요</div>;
        }
        return <div>알 수 없는 에러가 발생했습니다</div>;
    }
    if (!data) return <div>유저 정보 없음.</div>;
    return (
        <FormGroup sx={{ flexDirection: 'row' }}>
            <Grid letterSpacing={3} fontSize="h6.fontSize" fontWeight={600}
                padding='10px'>{<HowToRegIcon />} 작업상태</Grid>

            <FormControlLabel control=
                {<Checkbox
                    defaultChecked
                    checked={doneChecked}
                    onChange={doneHandleChange}
                />} label="DONE" />
            <FormControlLabel control=
                {<Checkbox
                    defaultChecked
                    checked={readyChecked}
                    onChange={readyHandleChange}
                />} label="READY" />
            <FormControlLabel control=
                {<Checkbox
                    defaultChecked
                    checked={not_foundChecked}
                    onChange={not_foundHandleChange}
                />} label="NOT_FOUND" />
            <FormControlLabel control=
                {<Checkbox
                    defaultChecked
                    checked={deletedChecked}
                    onChange={deletedHandleChange}
                />} label="DELETE" />
            <FormControlLabel control=
                {<Checkbox
                    defaultChecked
                    checked={ingChecked}
                    onChange={ingHandleChange}
                />} label="ING" />


            <FormControl sx={{ m: 1, minWidth: 120 }}>

            </FormControl>
            <LineChart
                width={1500}
                height={700}
                data={data}

                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="1 3" />
                <XAxis dataKey="createdAt" /><YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="sum"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }} />
            </LineChart>
            <Grid> TD페이지입니다.</Grid>
        </FormGroup>


    );
}