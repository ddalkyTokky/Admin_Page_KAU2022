import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Pilot from '../components/Pilot';
import Farmer from '../components/Farmer';
import Market from '../components/Market';
import TaskGroup from '../components/TaskGroup';
import Task from '../components/Task';
import TaskDetail from '../components/TaskDetail';
import Team from '../components/Team';
import TGChart from '../charts/TGChart';
import TaskChart from '../charts/TaskChart';
import TDChart from '../charts/TDChart';
import TeamChart from '../charts/TeamChart';
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import axios from 'axios';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import { URL } from '../constants/CONSTANTS';

/*
const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://54.180.104.224:3001/', true);
xhr.open('POST', 'http://54.180.104.224:3001/', true);
xhr.withCredentials = true;
xhr.send(null);
*/

//axios.defaults.withCredentials = true;

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

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [pageState, setPageState] = React.useState({
    whichPage: "pilot"
  });

  const auth_check = async () => {
    try {
      const response = await axios.get(URL,
        {
          headers: {
            token: Cookies.get("id")
          }
        }
      );
      //console.log(Cookies.get("id"))
      //console.log(response)
      if (response?.status == 200) {
        if (response.data == 'No token' || response.data == 'Expired token' || response.data == 'Invalid token' || response.data == 'Undefined token') {
          alert(response.data + "Login First!");
          navigate("/", { state: pathname });
        }
      }
    }
    catch (err) {
      alert(err + " Lost Connection");
      navigate("/", { state: pathname });
    }
  }

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    auth_check();
  }, []);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <React.Fragment>
              <ListSubheader component="div" inset>
                사용자 목록
              </ListSubheader>
              <ListItemButton
                onClick={() => {
                  setPageState({ whichPage: 'pilot' });
                }}>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="조종사" />
              </ListItemButton>
              <ListItemButton
                onClick={() => {
                  setPageState({ whichPage: 'farmer' });
                }}>
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="농업인" />
              </ListItemButton>
              <ListItemButton
                onClick={() => {
                  setPageState({ whichPage: 'market' });
                }}>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="대리점" />
              </ListItemButton>
            </React.Fragment>
            <Divider sx={{ my: 1 }} />
            <React.Fragment>
              <ListSubheader component="div" inset>
                작업 목록
              </ListSubheader>
              <ListItemButton
                onClick={() => {
                  setPageState({ whichPage: 'taskGroup' });
                }}>
                <ListItemIcon>
                  <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Task Group" />
              </ListItemButton>
              <ListItemButton
                onClick={() => {
                  setPageState({ whichPage: 'task' });
                }}>
                <ListItemIcon>
                  <LayersIcon />
                </ListItemIcon>
                <ListItemText primary="Task" />
              </ListItemButton>
              <ListItemButton
                onClick={() => {
                  setPageState({ whichPage: 'taskDetail' });
                }}>
                <ListItemIcon>
                  <LayersIcon />
                </ListItemIcon>
                <ListItemText primary="Task Detail" />
              </ListItemButton>
              <ListItemButton
                onClick={() => {
                  setPageState({ whichPage: 'team' });
                }}>
                <ListItemIcon>
                  <LayersIcon />
                </ListItemIcon>
                <ListItemText primary="Team" />
              </ListItemButton>
            </React.Fragment>
            <Divider sx={{ my: 1 }} />
            <React.Fragment>
              <ListSubheader component="div" inset>
                유저/작업 통계
              </ListSubheader>
              <ListItemButton
                onClick={() => {
                  setPageState({ whichPage: 'tgChart' });
                }}>
                <ListItemIcon>
                  <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="TG Chart" />
              </ListItemButton>
              <ListItemButton
                onClick={() => {
                  setPageState({ whichPage: 'taskChart' });
                }}>
                <ListItemIcon>
                  <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Task Chart" />
              </ListItemButton>
              <ListItemButton
                onClick={() => {
                  setPageState({ whichPage: 'tdChart' });
                }}>
                <ListItemIcon>
                  <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="TD Chart" />
              </ListItemButton>
              <ListItemButton
                onClick={() => {
                  setPageState({ whichPage: 'teamChart' });
                }}>
                <ListItemIcon>
                  <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Team Chart" />
              </ListItemButton>
            </React.Fragment>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ m: 1 }}>
            <Grid container spacing={3}>

              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', width: 1600, height: 800 }}>
                  {pageState.whichPage == "pilot" ? <Pilot /> : null}
                  {pageState.whichPage == "farmer" ? <Farmer /> : null}
                  {pageState.whichPage == "market" ? <Market /> : null}
                  {pageState.whichPage == "taskGroup" ? <TaskGroup /> : null}
                  {pageState.whichPage == "task" ? <Task /> : null}
                  {pageState.whichPage == "taskDetail" ? <TaskDetail /> : null}
                  {pageState.whichPage == "team" ? <Team /> : null}
                  {pageState.whichPage == "tgChart" ? <TGChart /> : null}
                  {pageState.whichPage == "taskChart" ? <TaskChart /> : null}
                  {pageState.whichPage == "tdChart" ? <TDChart /> : null}
                  {pageState.whichPage == "teamChart" ? <TeamChart /> : null}
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
