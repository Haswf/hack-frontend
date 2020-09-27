import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import mainListItems from './listItems';
import Avatar from "@material-ui/core/Avatar";
import {withRouter} from "react-router";
import Copyright from "../component/Copyright"
import axios from "../axios";
import {useSnackbar} from "notistack";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import LogoutButton from "../component/LogoutButton";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    openButtonHidden: {
        display: 'none',
    },
    closeButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 440,
    },
    fixedHeightImage: {
        height: 240,
    },

    buttonBottom: {
        marginTop: 50,
    },

    imagePosition: {
        marginLeft: 90,
        marginTop: 700,
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(35),
        height: theme.spacing(35),
    },

}));

const UserCenter = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [history, setHistory] = React.useState([]);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    if(!localStorage.getItem("user")){
        props.history.push("/login");
    }

    const getHistory = async () => {
        try {
            let response = await axios.get("/discussions/own", null
            , {
                headers: {
                    Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")).replace(/['"]+/g, '')                }
            })
            enqueueSnackbar("History retrieved" , {
                variant: 'success'
            });
            setHistory(response.data.data.discussions);
        } catch (e) {
            enqueueSnackbar("Fail to retrieve history" , {
                variant: 'error'
            });
        }
    }

    React.useEffect(() => {
        getHistory();
    }, [])

    const handleDrawerOpen = () => {
        setOpen(true);

    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}

                    >
                        <MenuIcon />
                    </IconButton>
                    <IconButton color="inherit" onClick={() => {props.history.push("/")}}>
                        <HomeIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        User Center
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit">
                        <Avatar alt="/static/images/avatar/1.jpg" src={""} />
                    </IconButton>

                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon/>
                    </IconButton>

                </div>
                <Divider />
                <List>{mainListItems}</List>
                <LogoutButton/>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    {history.map(e => {
                        return <Card>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    {e.title}
                                </Typography>
                                <Typography variant="body2" component="h2">
                                    {e.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    })}
                    <Box pt={4} className={classes.buttonBottom}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>

    );
}

export default withRouter(UserCenter);
