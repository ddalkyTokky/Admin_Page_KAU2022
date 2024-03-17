import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useCookies } from 'react-cookie';
import { URL } from './constants/CONSTANTS';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignIn() {
    const [cookies, setCookie, removeCookie] = useCookies(['id']);
    const navigate = useNavigate();

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        /*
        console.log({
            id: data.get('id'),
            password: data.get('password'),
        });
        */

        try {
            const response = await axios.post(URL,
                {
                    id_field: data.get('id'),
                    pw_field: data.get('password')
                }
            );

            if (response?.status != 200) {
                alert(response?.status + "Connection Error.");
            }
            else {
                if (response?.data.message == 'fail') {
                    alert("Wrong ID or PW!!");
                }
                if (response?.data.message == 'success') {
                    setCookie("id", response?.data.token);
                    navigate("/dashboard");
                }
            }
        }
        catch (error) {
            alert("Connection Lost. / " + error);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Avatar sx={{ m: 2, bgcolor: '#5FB404' }}>
                        <LockOutlinedIcon />
                    </Avatar>

                    <Typography component="h1" variant="h4" fontWeight={700} fontSize='200%'>
                        관리자페이지
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="id"
                            label="ID"
                            name="id"
                            autoComplete="id"
                            autoFocus

                            sx={{
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    "& > fieldset": {
                                        borderColor: '#5FB404'
                                    }
                                }
                            }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="PW"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            sx={{
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    "& > fieldset": {
                                        borderColor: '#5FB404'
                                    }
                                }
                            }}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="ID 및 PW 저장"
                        />
                        <Button
                            type="submit"
                            size="large"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            style={{ background: '#5FB404' }}
                        >
                            로그인
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}