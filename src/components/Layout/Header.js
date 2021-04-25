import React from 'react';
import {AppBar, Box, Button, Container, makeStyles, Switch, Toolbar} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {selectIsDarkMode, toggleDarkMode} from "../../store/darkMode/darkModeSlice";

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    leftIconsContainer: {
        textAlign: "left",
    },
    rightIconsContainer: {
        textAlign: "right",

    },
    centerIconsContainer: {
        textAlign: "center",

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
        <AppBar elevation={5} color={'white'} position={'fixed'}>
            <Container maxWidth={'lg'}>
                <Toolbar color={'gray'} disableGutters>

                    {/* Left Icons*/}

                    <Box className={`${classes.grow} ${classes.leftIconsContainer}`}>
                        Logo
                    </Box>

                    {/* Center Icons*/}

                    <Box className={`${classes.grow} ${classes.centerIconsContainer}`}>
                        <Button>
                            HOME
                        </Button>
                        <Button>
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
                            inputProps={{ 'aria-label': 'Dark Mode Switch' }}
                        />
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
