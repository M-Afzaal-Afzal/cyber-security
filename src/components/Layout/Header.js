import React, {useState} from 'react';
import {
    AppBar,
    Box,
    Button,
    Container,
    Divider,
    Hidden,
    IconButton,
    makeStyles,
    Switch,
    Toolbar
} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {selectIsDarkMode, toggleDarkMode} from "../../store/darkMode/darkModeSlice";
import Image from "next/image";
import {Link} from 'react-scroll'
import {DehazeRounded} from "@material-ui/icons";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    leftIconsContainer: {
        textAlign: "left",
        display: 'flex',
        alignItems: 'center',
    },
    rightIconsContainer: {
        textAlign: "right",

    },
    centerIconsContainer: {
        textAlign: "center",
    },
    imageContainer: {
        position: 'relative',
        width: '200px',
        height: '50px',
    },
    imageLink: {
        display: "inline-block",
        cursor: 'pointer',
        // height: '100%'
    },
    list: {
        width: 250,
    },
    drawerImageContainer: {
        position: "relative",
        width: '150px',
        height: '150px',
    },
    drawerLogoItem: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2rem',
    }
}))

const Header = () => {

    const classes = useStyles();

    const isDarkMode = useSelector(selectIsDarkMode);

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const dispatch = useDispatch();

    const darkModeHandler = () => {
        dispatch(toggleDarkMode());
    }

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }

    return (
        <AppBar color={'default'} elevation={5} position={'fixed'}>
            <Container maxWidth={'lg'}>
                <Toolbar color={'gray'} disableGutters>

                    {/* Left Icons*/}

                    <Box className={`${classes.grow} ${classes.leftIconsContainer}`}>
                        <Box className={classes.imageLink} component={Link} to={'home'} smooth={true}>
                            <Box className={classes.imageContainer}>
                                <Image priority alt={'Cyber Security'}
                                       src={'https://res.cloudinary.com/afzaal1721/image/upload/v1619584623/Logoh_diisax.png'}
                                       layout={'fill'} objectFit={'cover'}/>
                            </Box>
                        </Box>
                    </Box>

                    {/* Center Icons*/}

                    <Hidden smDown>
                        <Box className={`${classes.grow} ${classes.centerIconsContainer}`}>
                            <Button component={Link} to={'home'} smooth={true}>
                                HOME
                            </Button>
                            <Button component={Link} to={'contactus'} smooth={true}>
                                CONTACT US
                            </Button>
                        </Box>
                    </Hidden>

                    {/* Right Icons*/}

                    <Box className={`${classes.grow} ${classes.rightIconsContainer}`}>
                        <Hidden smDown>
                            <Switch
                                color={'primary'}
                                checked={isDarkMode}
                                onChange={darkModeHandler}
                                name="Dark Mode Switch"
                                inputProps={{'aria-label': 'Dark Mode Switch'}}
                            />
                        </Hidden>

                        <Hidden mdUp>
                            <IconButton onClick={toggleDrawer}>
                                <DehazeRounded/>
                            </IconButton>
                        </Hidden>

                    </Box>

                    <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
                        <List className={classes.list}>

                            {/* drawer logo */}
                            <ListItemText className={classes.drawerLogoItem} button>
                                <Box component={Link} to={'home'} smooth={true}>
                                    <Box onClick={toggleDrawer} className={classes.drawerImageContainer}>
                                        <Image
                                            src={'https://res.cloudinary.com/afzaal1721/image/upload/v1619584629/Logov_ov2lqe.png'}
                                            layout={'fill'} objectFit={'cover'}
                                            priority
                                        />
                                    </Box>
                                </Box>
                            </ListItemText>

                            <Divider/>

                            <Box component={Link} to={'home'} smooth={true}>
                                <Box onClick={toggleDrawer}>
                                    <ListItem button>
                                        <ListItemText primary={'Home'}/>
                                    </ListItem>
                                </Box>
                            </Box>
                            <Divider/>

                            <Box component={Link} to={'contactus'} smooth={true}>
                                <Box onClick={toggleDrawer}>
                                    <ListItem button>
                                        <ListItemText primary={'Contact Us'}/>
                                    </ListItem>
                                </Box>
                            </Box>
                            <Divider/>

                            <Box onClick={darkModeHandler}>
                                <Box onClick={toggleDrawer}>
                                    <ListItem button>
                                        <ListItemText primary={isDarkMode ? 'Light Mode' : 'Dark Mode'}/>
                                    </ListItem>
                                </Box>
                            </Box>
                            <Divider/>

                        </List>
                    </Drawer>

                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
