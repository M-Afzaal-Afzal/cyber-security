import React from 'react';
import {AppBar, Box, Button, Container, makeStyles, Switch, Toolbar} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {selectIsDarkMode, toggleDarkMode} from "../../store/darkMode/darkModeSlice";
import Image from "next/image";
import {Link} from 'react-scroll'

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
    }
}))

const Header = () => {

    const classes = useStyles();

    const isDarkMode = useSelector(selectIsDarkMode);

    const dispatch = useDispatch();

    const darkModeHandler = () => {
        dispatch(toggleDarkMode());
    }

    return (
        <AppBar color={'default'} elevation={5} position={'fixed'}>
            <Container maxWidth={'lg'}>
                <Toolbar color={'gray'} disableGutters>

                    {/* Left Icons*/}

                    <Box className={`${classes.grow} ${classes.leftIconsContainer}`}>
                        <Box className={classes.imageLink} component={Link} to={'home'} smooth={true}>
                            <Box className={classes.imageContainer}>
                                <Image priority alt={'Cyber Security'} src={'/logoh.png'} layout={'fill'} objectFit={'cover'}/>
                            </Box>
                        </Box>
                    </Box>

                    {/* Center Icons*/}

                    <Box className={`${classes.grow} ${classes.centerIconsContainer}`}>
                        <Button component={Link} to={'home'} smooth={true}>
                            HOME
                        </Button>
                        <Button component={Link} to={'contactus'} smooth={true}>
                            CONTACT US
                        </Button>
                    </Box>

                    {/* Right Icons*/}

                    <Box className={`${classes.grow} ${classes.rightIconsContainer}`}>
                        <Switch
                            color={'primary'}
                            checked={isDarkMode}
                            onChange={darkModeHandler}
                            name="Dark Mode Switch"
                            inputProps={{'aria-label': 'Dark Mode Switch'}}
                        />
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
